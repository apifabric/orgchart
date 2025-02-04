# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, DateTime, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime

Base = declarative_base()

class Employee(Base):
    """description: Table representing employees including their hierarchical info."""
    __tablename__ = 'employee'
    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String)
    last_name = Column(String)
    position_id = Column(Integer, ForeignKey('position.id'))
    department_id = Column(Integer, ForeignKey('department.id'))
    manager_id = Column(Integer, ForeignKey('employee.id'), nullable=True)

class Department(Base):
    """description: Table representing different departments within the organization."""
    __tablename__ = 'department'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)

class Position(Base):
    """description: Table representing job positions within the organization."""
    __tablename__ = 'position'
    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String)
    salary_grade = Column(Integer)

class Office(Base):
    """description: Table representing offices in different locations."""
    __tablename__ = 'office'
    id = Column(Integer, primary_key=True, autoincrement=True)
    location = Column(String)

class Project(Base):
    """description: Table representing projects employees are working on."""
    __tablename__ = 'project'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)
    due_date = Column(DateTime)

class Assignment(Base):
    """description: Link table representing employee assignments to projects."""
    __tablename__ = 'assignment'
    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey('employee.id'))
    project_id = Column(Integer, ForeignKey('project.id'))

class Skill(Base):
    """description: Table representing skills that employees can possess."""
    __tablename__ = 'skill'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)

class EmployeeSkill(Base):
    """description: Link table connecting employees to their skills."""
    __tablename__ = 'employee_skill'
    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey('employee.id'))
    skill_id = Column(Integer, ForeignKey('skill.id'))

class PerformanceReview(Base):
    """description: Table representing performance reviews for employees."""
    __tablename__ = 'performance_review'
    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey('employee.id'))
    review_date = Column(DateTime)
    score = Column(Float)

class Training(Base):
    """description: Table representing training sessions available for employees."""
    __tablename__ = 'training'
    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String)
    course_date = Column(DateTime)

class EmployeeTraining(Base):
    """description: Link table representing employee participation in training sessions."""
    __tablename__ = 'employee_training'
    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey('employee.id'))
    training_id = Column(Integer, ForeignKey('training.id'))

class Benefit(Base):
    """description: Table representing benefit offerings within the company."""
    __tablename__ = 'benefit'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)
    description = Column(String)

# Initialize the database and create the tables
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# Populate sample data
department1 = Department(name="HR")
department2 = Department(name="Engineering")
department3 = Department(name="Marketing")

position1 = Position(title="Developer", salary_grade=5)
position2 = Position(title="Manager", salary_grade=8)
position3 = Position(title="HR Specialist", salary_grade=4)

office1 = Office(location="Headquarters")
office2 = Office(location="Remote")

project1 = Project(name="Project A", due_date=datetime(2023, 12, 31))
project2 = Project(name="Project B", due_date=datetime(2024, 6, 30))

skill1 = Skill(name="Python")
skill2 = Skill(name="Project Management")

training1 = Training(title="Advanced Python", course_date=datetime(2023, 11, 1))
training2 = Training(title="Leadership 101", course_date=datetime(2023, 12, 1))

benefit1 = Benefit(name="Health Insurance", description="Full coverage")
benefit2 = Benefit(name="Stock Options", description="Annual grants")

employee1 = Employee(first_name="Alice", last_name="Smith", position_id=1, department_id=2, manager_id=None)
employee2 = Employee(first_name="Bob", last_name="Johnson", position_id=2, department_id=2, manager_id=1)
employee3 = Employee(first_name="Carol", last_name="Williams", position_id=3, department_id=1, manager_id=None)

assignment1 = Assignment(employee_id=1, project_id=1)
assignment2 = Assignment(employee_id=2, project_id=2)

employee_skill1 = EmployeeSkill(employee_id=1, skill_id=1)
employee_skill2 = EmployeeSkill(employee_id=2, skill_id=2)

performance_review1 = PerformanceReview(employee_id=1, review_date=datetime(2023, 10, 1), score=4.5)
performance_review2 = PerformanceReview(employee_id=2, review_date=datetime(2023, 10, 15), score=3.8)

employee_training1 = EmployeeTraining(employee_id=2, training_id=2)
employee_training2 = EmployeeTraining(employee_id=3, training_id=1)

# Add all instances to session and commit
session.add_all([
    department1, department2, department3,
    position1, position2, position3,
    office1, office2,
    project1, project2,
    skill1, skill2,
    training1, training2,
    benefit1, benefit2,
    employee1, employee2, employee3,
    assignment1, assignment2,
    employee_skill1, employee_skill2,
    performance_review1, performance_review2,
    employee_training1, employee_training2
])
session.commit()

session.close()
