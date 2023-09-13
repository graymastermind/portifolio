#!/usr/bin/env python
# coding: utf-8

# **Table of Content:**
# * [Get Data](#1)
# * [Popular Recommendation System](#2)
# * [Memory Based - Collaborative Filtering](#3)
# * [Model Based - Collaborative Filtering](#4)
# * [Weighted Hybrid Recommendation System](#5)
# * [Get Recommendation](#6)
# * [Evaluation](#7)
# ## Summary
# ![Weighted Hybrid Recommendation System.png](attachment:5d7195c3-31b8-4661-88cd-ac61a8fb3a1f.png)
# 
import numpy as np 
import pandas as pd 
import os
import random
from timeit import default_timer as timer

for dirname, _, filenames in os.walk('/kaggle/input'):
    for filename in filenames:
        print(os.path.join(dirname, filename))


# <a id="1"></a>
# ## Get Data
# The dataset contains purchase data about the bank's customers and the bank's products.
# The data starts at 2015-01-28 and has monthly records of products a customer has, such as "credit
# card", "savings account", etc. 

# In[3]:


dtype_list = {'ind_cco_fin_ult1': 'uint8', 'ind_deme_fin_ult1': 'uint8',
          'ind_aval_fin_ult1': 'uint8', 'ind_valo_fin_ult1': 'uint8',
          'ind_reca_fin_ult1': 'uint8', 'ind_ctju_fin_ult1': 'uint8',
          'ind_cder_fin_ult1': 'uint8', 'ind_plan_fin_ult1': 'uint8',
          'ind_fond_fin_ult1': 'uint8', 'ind_hip_fin_ult1': 'uint8',
          'ind_pres_fin_ult1': 'uint8', 'ind_nomina_ult1': 'Int64', 
          'ind_cno_fin_ult1': 'uint8', 'ind_ctpp_fin_ult1': 'uint8',
          'ind_ahor_fin_ult1': 'uint8', 'ind_dela_fin_ult1': 'uint8',
          'ind_ecue_fin_ult1': 'uint8', 'ind_nom_pens_ult1': 'Int64',
          'ind_recibo_ult1': 'uint8', 'ind_deco_fin_ult1': 'uint8',
          'ind_tjcr_fin_ult1': 'uint8', 'ind_ctop_fin_ult1': 'uint8',
          'ind_viv_fin_ult1': 'uint8', 'ind_ctma_fin_ult1': 'uint8',
         'ncodpers' : 'uint32'}  

name_col = ['ncodpers', 'fecha_dato', 'ind_ahor_fin_ult1','ind_aval_fin_ult1','ind_cco_fin_ult1',
           'ind_cder_fin_ult1','ind_cno_fin_ult1','ind_ctju_fin_ult1',
           'ind_ctma_fin_ult1','ind_ctop_fin_ult1','ind_ctpp_fin_ult1',
           'ind_deco_fin_ult1','ind_deme_fin_ult1','ind_dela_fin_ult1',
           'ind_ecue_fin_ult1','ind_fond_fin_ult1','ind_hip_fin_ult1',
           'ind_plan_fin_ult1','ind_pres_fin_ult1','ind_reca_fin_ult1',
           'ind_tjcr_fin_ult1','ind_valo_fin_ult1','ind_viv_fin_ult1',
           'ind_nomina_ult1','ind_nom_pens_ult1','ind_recibo_ult1']
start = timer()
# read a large csv file using chunks with specified dtype and usecols parameters to optimize memory usage
reader = pd.read_csv('kaggle/input/train_ver2.csv.zip', chunksize=1e6,
                     dtype=dtype_list, usecols=name_col)
# concatenate the data from all the chunks into a single dataframe
df_train = pd.concat([chunk for chunk in reader])
df_train.shape
# data will be trained on '2015-05-28'
df_train1505 = df_train[df_train.fecha_dato == '2015-05-28']
df_train1505 = df_train1505.drop(['fecha_dato'], axis=1, inplace=False)
df_train1505 = df_train1505.fillna(0)
df_train1505.shape
# ## Popular Recommendation Systemdef popularity_based(df):
    """
    Function that calculates the probability of a product occurring. 
    Probability range is <0, 1>.
    """
    top_col = {}
    for col in df.columns[1:]:
        top_col[col] = df[col].value_counts()[1]
#     sorted by most popular
#     top_col = dict(sorted(top_col.items(), key=lambda it: it[1], reverse=True)) 
    for k, v in top_col.items():
        top_col[k] = np.around(v / df.shape[0], decimals=4)
    return top_col
popularity_based(df_train1505)
# <a id="3"></a>
# ## Memory Based - Collaborative Filtering
# Collaborative Filtering is based on the analysis of user ratings. In the dataset, the rating is information about the product ownership (1 or 0). In memory based technique recommendations are based on similarity between users. The similarity between users is calculated by the similarity measure function. It uses the cosine distance to create the user-item similarity matrix.
df_ui = df_train1505.copy()
df_ui = df_ui[:10000] # limited to 10k due to RAM limit
df_ui = df_ui.set_index('ncodpers')
df_ui.shape
from sklearn.metrics.pairwise import pairwise_distances 
# create the user-item similarity matrix
# removes index names
cosine_sim = 1 - pairwise_distances(df_ui, metric="cosine")
def useritem(user_id, df, sim_matrix = cosine_sim):
    """
    Function that calculates recommendations for a given user.
    It uses cosine similarity to calculate the most similar users.
    Returns the probability of products for a given user based on similar users.
    Probability range is <0, 1>.
    """
    # computes the index in the user-item similarity matrix for a given user_id
    cos_id = list(df.index).index(user_id) 
    
    # number of similar users
    k = 0
    sim_min = 0.79
    user_sim_k = {}
    
    while k < 20:
        # creates the dictionary {'similar user':'similarity'}
        for user in range(len(df)):
            
            # 0.99 because I don`t want the same user as user_id
            if sim_min < sim_matrix[cos_id, user] < 0.99:
                user_sim_k[user] = sim_matrix[cos_id, user]
                k+=1
                
        sim_min -= 0.025
        
        # if there are no users with similarity at least 0.65, the recommendation probability will be set to 0 
        if sim_min < 0.65:
            break
            
    # sorted k most similar users
    user_sim_k = dict(sorted(user_sim_k.items(), key=lambda item: item[1], reverse=True))
    user_id_k = list(user_sim_k.keys()) 
    
    # dataframe with k most similar users
    df_user_k = df.iloc[user_id_k]
    df_user_k_T = df_user_k.T
    
    # change the user index to the cosine index
    df_user_k_T.columns = user_id_k
    
    # mean of ownership by k similar users
    ownership = []
    usit = {}
    
    for row_name, row in df_user_k_T.iterrows():
        
        for indx, own in row.items():
            
            ownership.append(own) 
        
        usit[row_name] = np.mean(ownership)
        ownership = []
        
    # if there are no users with similarity at least 0.65, the recommendation probability is 0 
    if pd.isna(list(usit.values())[0]) == True:
        
        usit = {key : 0 for (key, value) in usit.items()}
            
    return usit


# In[11]:
useritem(1061608, df_ui)
# <a id="4"></a>
# ## Model Based - Collaborative Filtering
# Collaborative Filtering is based on the analysis of user ratings. In the dataset, the rating is information about the product ownership (1 or 0). In model based technique recommendations are based on machine learning models. The model is built on the matrix ownership of products by consumers.df_mb = df_train1505.copy()
df_mb = df_mb.set_index('ncodpers')df_val1603 = df_train[df_train.fecha_dato == '2016-03-28']
df_val1603 = df_val1603.drop(['fecha_dato'], axis=1, inplace=False)
df_val1603 = df_val1603.set_index('ncodpers')
# In[14]:
from collections import defaultdict
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import GridSearchCV
import warnings
warnings.filterwarnings('ignore')
def modelbased(user_id, df, model=DecisionTreeClassifier(max_depth=9)):
    """
    Function that calculates recommendations for a given user.
    It uses machine learning model to calculate the probability of products.
    Probability range is <0, 1>.   
    """
    
    mdbs = {}
    
    for c in df.columns:
        y_train = df[c].astype('int')
        x_train = df.drop([c], axis = 1)
        model.fit(x_train, y_train)
        p_train = model.predict_proba(x_train[x_train.index == user_id])[:,1]
        
        mdbs[c] = p_train[0]
        
    return mdbsmodelbased(1061608, df_mb)
# ## Weighted Hybrid Recommendation System
# Hybrid recommender systems are based on a combination of individual recommender systems. This reduces the disadvantages of various types of systems, and thus increases the effectiveness of recommendations. One type of hybrid recommendation system is the weighted hybrid recommendation system. It works by combining all the results from individual recommendation systems using specific weightings.
def hybrid(user_id, df_p, df_u, df_m, f1, f2, f3):
    """
    Function that calculates weighted hybrid recommendations for a given user.
    It uses weights to calculate the probability of products. 
    """
    pb_h = popularity_based(df_p)
    ui_h = useritem(user_id, df_u)
    mb_h =  modelbased(user_id, df_m)

    hybrid = {}
    for k, v in pb_h.items():
        hybrid[k] = (v * f1) + (ui_h[k] * f2) + (mb_h[k] * f3)
    
    return hybrid
hybrid_rec_1061608 = hybrid(1061608, df_p = df_train1505, df_u = df_ui, df_m = df_mb, f1 = 0.5, f2 = 0.25, f3 = 0.25)
hybrid_rec_1061608
# <a id="6"></a>
# ## Get Recommendation
# Returns a list of recommendations for a given user.
product_names = {"ind_ahor_fin_ult1" : "Saving Account",
"ind_aval_fin_ult1" : "Guarantees",
"ind_cco_fin_ult1" : "Current Accounts",
# "ind_cder_fin_ult1" : "Derivada Account",
"ind_cno_fin_ult1" : "Payroll Account",
"ind_ctju_fin_ult1" : "Junior Account",
# "ind_ctma_fin_ult1" : "Más Particular Account",
"ind_ctop_fin_ult1" : "Particular Account",
"ind_ctpp_fin_ult1" : "Particular Plus Account",
"ind_deco_fin_ult1" : "Short-term Deposits",
"ind_deme_fin_ult1" : "Medium-term Deposits",
"ind_dela_fin_ult1" : "Long-term Deposits",
"ind_ecue_fin_ult1" : "E-account",
"ind_fond_fin_ult1" : "Funds",
"ind_hip_fin_ult1" : "Mortgage",
"ind_plan_fin_ult1" : "Pensions",
"ind_pres_fin_ult1" : "Loans",
"ind_reca_fin_ult1" : "Taxes",
"ind_tjcr_fin_ult1" : "Credit Card",
"ind_valo_fin_ult1" : "Securities",
"ind_viv_fin_ult1" : "Home Account",
"ind_nomina_ult1" : "Payroll",
"ind_nom_pens_ult1" : "Pensions",
"ind_recibo_ult1" : "Direct Debit"}
def change_names(col_names, map_products=product_names):
    '''
    Change column names (e.g."ind_recibo_ult1") to product names (e.g."Direct Debit").
    '''
    return list(map(lambda col_name: map_products[col_name], col_names))
def recommendation(user_id, df, hybrid_outcome):
    """
    Function that returns a list of recommendations for a given user.
    """
        
    # products that the user already owns
    user_row = df[df.index == user_id]
    user_products = list(filter(lambda product: user_row[product].to_numpy()[0]==1, user_row))
                
    # removes products that the user already owns
    recom = { key : hybrid_outcome[key] for key in hybrid_outcome if key not in user_products}

    recom_sort = dict(sorted(recom.items(), key=lambda item: item[1], reverse=True))
    
    return list(recom_sort.keys())
rec_1061608 = recommendation(1061608, df_mb, hybrid_rec_1061608)
change_names(rec_1061608)
# <a id="7"></a>
# ## Evaluation
# In the evaluation, I use the average precision metric for 7 products. This metric checks the validity of the recommendations and the correctness of their position on the list of recommendations. The product with the highest probability of purchase is placed first in the list.df_test1605 = df_train[df_train.fecha_dato == '2016-05-28']
df_test1605 = df_test1605.drop(['fecha_dato'], axis=1, inplace=False)
def rec_test(user_id, df1, df2):
    """
    Function that returns a list of test recommendations for a given user.
    """
    recom_test = []
    
    data_before = df1[df1.ncodpers == user_id].values[0]
    data_after = df2[df2.ncodpers == user_id].values[0]
    
    for i, col in enumerate(df1.columns[1:]):    
        if data_before[i+1] == 0 and data_after[i+1] == 1:
            recom_test.append(col)

    return recom_test
rec_test_1061608 = rec_test(1061608, df_train1505, df_test1605)
change_names(rec_test_1061608)
def apk(actual, predicted, k=7):
    """
    Computes the average precision at k.
    This function computes the average prescision at k between two lists of
    items.
    Parameters
    ----------
    actual : list
             A list of elements that are to be predicted (order doesn't matter)
    predicted : list
                A list of predicted elements (order does matter)
    k : int, optional
        The maximum number of predicted elements
    Returns
    -------
    score : double
            The average precision at k over the input lists
    """
    if len(predicted)>k:
        predicted = predicted[:k]

    score = 0.0
    num_hits = 0.0

    for i,p in enumerate(predicted):
        if p in actual and p not in predicted[:i]:
            num_hits += 1.0
            score += num_hits / (i+1.0)

    if not actual:
        return 0.0

    return score / min(len(actual), k)

def mapk(actual, predicted, k=7):
    """
    Computes the mean average precision at k.
    This function computes the mean average prescision at k between two lists
    of lists of items.
    Parameters
    ----------
    actual : list
             A list of lists of elements that are to be predicted 
             (order doesn't matter in the lists)
    predicted : list
                A list of lists of predicted elements
                (order matters in the lists)
    k : int, optional
        The maximum number of predicted elements
    Returns
    -------
    score : double
            The mean average precision at k over the input lists
    """
    return np.mean([apk(a,p,k) for a,p in zip(actual, predicted)])
def evaluation(user_id, f1, f2, f3):
    """
    Function that returns the average precision metric for a given user.
    """
    y_real = rec_test(user_id, df_train1505, df_test1605)
    y_pred = recommendation(user_id, df_mb,
                            hybrid_outcome = hybrid(user_id, df_u = df_ui, df_m = df_mb,
                                                    df_p = df_train1505,
                                                    f1 = f1, f2 = f2, f3 = f3))
    return apk(y_real, y_pred)
evaluation(1061608, f1 = 0.8, f2=0.5, f3=0.2)
end = timer()
print(round((end - start)/60 , 2),'min')
