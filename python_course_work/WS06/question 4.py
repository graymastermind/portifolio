
marks = []
for i in range(5):
    row = input(f"Student {i+1} (courses 1-4): ")
    row = list(map(int, row.split()))
    marks.append(row)

# Calculating the average marks for each student and course
student_averages = [sum(row)/4 for row in marks]
course_averages = [sum([marks[i][j] for i in range(5)])/5 for j in range(4)]

# Finding the highest average marks for students and courses
max_student_average = max(student_averages)
max_course_average = max(course_averages)

print(f"The highest average mark of students: {max_student_average}")
print(f"The highest average mark of courses: {max_course_average}")