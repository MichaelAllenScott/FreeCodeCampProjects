using System;
using System.Collections.Generic;

namespace Design_Pattern_Project
{
    /*  Composite pattern is a partitioning design pattern and describes a group of objects that is treated the same way as a 
        single instance of the same type of object. The intent of a composite is to “compose” objects into tree structures 
        to represent part-whole hierarchies. It allows you to have a tree structure and ask each node in the tree structure
        to perform a task.
        Component – Component declares the interface for objects in the composition and for accessing and managing its child components. 
            It also implements default behavior for the interface common to all classes as appropriate.
        Leaf – Leaf defines behavior for primitive objects in the composition. It represents leaf objects in the composition.
        Composite – Composite stores child components and implements child related operations in the component interface.
        Client – Client manipulates the objects in the composition through the component interface.
    */
    public static class CompositePattern
    {
        public static void PerformPattern()
        {
            EmployeeGroup devGroup = new EmployeeGroup();
            devGroup.AddEmployee(new Developer("Tom"));
            devGroup.AddEmployee(new Developer("Jack"));

            EmployeeGroup manGroup = new EmployeeGroup();
            manGroup.AddEmployee(new Manager("Peter"));
            manGroup.AddEmployee(new Manager("Francis"));

            EmployeeGroup companyDirectory = new EmployeeGroup();
            companyDirectory.AddEmployee(devGroup);
            companyDirectory.AddEmployee(manGroup);

            companyDirectory.ShowEmployeeDetails();
        }
    }

    //Component
    public abstract class Employee
    {
        public abstract void ShowEmployeeDetails();
    }

    //Composite
    public class EmployeeGroup : Employee
    {
        private List<Employee> _employees = new List<Employee>();

        public void AddEmployee(Employee employee)
        {
            _employees.Add(employee);
        }

        public override void ShowEmployeeDetails()
        {
            foreach(Employee employee in _employees)
            {
                employee.ShowEmployeeDetails();
            }
        }
    }

    //Leaf
    public class Manager : Employee
    {
        public string ManagerName { get; set; }
        public Manager(string name)
        {
            this.ManagerName = name;
        }
        public override void ShowEmployeeDetails()
        {
            Console.WriteLine($"Manager: {ManagerName}");
        }
    }

    //Leaf
    public class Developer : Employee
    {
        public string DeveloperName { get; set; }
        public Developer(string name)
        {
            this.DeveloperName = name;
        }
        public override void ShowEmployeeDetails()
        {
            Console.WriteLine($"Developer: {DeveloperName}");
        }
    }
}
