# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 08, 2024 05:53:36
# Database: sqlite:////tmp/tmp.8e6eq8KPH3/orgchart/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Benefit(SAFRSBaseX, Base):
    """
    description: Table representing benefit offerings within the company.
    """
    __tablename__ = 'benefit'
    _s_collection_name = 'Benefit'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    description = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)



class Department(SAFRSBaseX, Base):
    """
    description: Table representing different departments within the organization.
    """
    __tablename__ = 'department'
    _s_collection_name = 'Department'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    EmployeeList : Mapped[List["Employee"]] = relationship(back_populates="department")



class Office(SAFRSBaseX, Base):
    """
    description: Table representing offices in different locations.
    """
    __tablename__ = 'office'
    _s_collection_name = 'Office'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    location = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)



class Position(SAFRSBaseX, Base):
    """
    description: Table representing job positions within the organization.
    """
    __tablename__ = 'position'
    _s_collection_name = 'Position'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    title = Column(String)
    salary_grade = Column(Integer)

    # parent relationships (access parent)

    # child relationships (access children)
    EmployeeList : Mapped[List["Employee"]] = relationship(back_populates="position")



class Project(SAFRSBaseX, Base):
    """
    description: Table representing projects employees are working on.
    """
    __tablename__ = 'project'
    _s_collection_name = 'Project'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    due_date = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)
    AssignmentList : Mapped[List["Assignment"]] = relationship(back_populates="project")



class Skill(SAFRSBaseX, Base):
    """
    description: Table representing skills that employees can possess.
    """
    __tablename__ = 'skill'
    _s_collection_name = 'Skill'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    EmployeeSkillList : Mapped[List["EmployeeSkill"]] = relationship(back_populates="skill")



class Training(SAFRSBaseX, Base):
    """
    description: Table representing training sessions available for employees.
    """
    __tablename__ = 'training'
    _s_collection_name = 'Training'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    title = Column(String)
    course_date = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)
    EmployeeTrainingList : Mapped[List["EmployeeTraining"]] = relationship(back_populates="training")



class Employee(SAFRSBaseX, Base):
    """
    description: Table representing employees including their hierarchical info.
    """
    __tablename__ = 'employee'
    _s_collection_name = 'Employee'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    first_name = Column(String)
    last_name = Column(String)
    position_id = Column(ForeignKey('position.id'))
    department_id = Column(ForeignKey('department.id'))
    manager_id = Column(ForeignKey('employee.id'))

    # parent relationships (access parent)
    department : Mapped["Department"] = relationship(back_populates=("EmployeeList"))
    manager_ : Mapped["Employee"] = relationship(remote_side=[id], back_populates=("EmployeeList"))
    position : Mapped["Position"] = relationship(back_populates=("EmployeeList"))

    # child relationships (access children)
    EmployeeList : Mapped[List["Employee"]] = relationship(back_populates="manager_")
    AssignmentList : Mapped[List["Assignment"]] = relationship(back_populates="employee")
    EmployeeSkillList : Mapped[List["EmployeeSkill"]] = relationship(back_populates="employee")
    EmployeeTrainingList : Mapped[List["EmployeeTraining"]] = relationship(back_populates="employee")
    PerformanceReviewList : Mapped[List["PerformanceReview"]] = relationship(back_populates="employee")



class Assignment(SAFRSBaseX, Base):
    """
    description: Link table representing employee assignments to projects.
    """
    __tablename__ = 'assignment'
    _s_collection_name = 'Assignment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employee.id'))
    project_id = Column(ForeignKey('project.id'))

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("AssignmentList"))
    project : Mapped["Project"] = relationship(back_populates=("AssignmentList"))

    # child relationships (access children)



class EmployeeSkill(SAFRSBaseX, Base):
    """
    description: Link table connecting employees to their skills.
    """
    __tablename__ = 'employee_skill'
    _s_collection_name = 'EmployeeSkill'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employee.id'))
    skill_id = Column(ForeignKey('skill.id'))

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("EmployeeSkillList"))
    skill : Mapped["Skill"] = relationship(back_populates=("EmployeeSkillList"))

    # child relationships (access children)



class EmployeeTraining(SAFRSBaseX, Base):
    """
    description: Link table representing employee participation in training sessions.
    """
    __tablename__ = 'employee_training'
    _s_collection_name = 'EmployeeTraining'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employee.id'))
    training_id = Column(ForeignKey('training.id'))

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("EmployeeTrainingList"))
    training : Mapped["Training"] = relationship(back_populates=("EmployeeTrainingList"))

    # child relationships (access children)



class PerformanceReview(SAFRSBaseX, Base):
    """
    description: Table representing performance reviews for employees.
    """
    __tablename__ = 'performance_review'
    _s_collection_name = 'PerformanceReview'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employee.id'))
    review_date = Column(DateTime)
    score = Column(Float)

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("PerformanceReviewList"))

    # child relationships (access children)
