using System;
using System.Collections.Generic;
using System.Text;

namespace Design_Pattern_Project
{
    /*
     * This is a creational pattern, as it is used to control class instantiation. 
     * The abstract factory pattern is used to provide a client with a set of related or dependant objects. 
     * The "family" of objects created by the factory is determined at run-time according to the selection of concrete factory class.
     * 
     * 1. Client
     * 2. AbstractFactory
     * 3. ConcreteFactory
     * 4. AbstractProduct
     * 5. ConcreteProduct
     */
    public static class AbstractFactoryPattern
    {
        public static void PerformPattern()
        {
            PackageFactory standardPackage = new StandardPackageFactory();
            Package package = new Package(standardPackage);
            Console.WriteLine($"Package Created: {package.Packaging.GetType().Name}");
            Console.WriteLine($"Document Created: {package.Document.GetType().Name}");

            PackageFactory heavyPackage = new HeavyPackageFactory();
            Package package2 = new Package(heavyPackage);
            Console.WriteLine($"Package Created: {package2.Packaging.GetType().Name}");
            Console.WriteLine($"Document Created: {package2.Document.GetType().Name}");
        }
    }

    // Client
    public class Package
    {
        private Packaging _packaging;
        private Documentation _document;

        public Package(PackageFactory factory)
        {
            _packaging = factory.CreatePackaging();
            _document = factory.CreateDocumentation();
        }

        public Packaging Packaging
        {
            get { return _packaging; }
        }

        public Documentation Document
        {
            get { return _document; }
        }
    }


    //Abstract Factory
    public abstract class PackageFactory
    {
        public abstract Packaging CreatePackaging();

        public abstract Documentation CreateDocumentation();
    }


    //Concrete Factory
    public class StandardPackageFactory : PackageFactory
    {
        public override Packaging CreatePackaging()
        {
            return new StandardPackaging();
        }

        public override Documentation CreateDocumentation()
        {
            return new RegularPostage();
        }
    }

    //Concrete Factory
    public class HeavyPackageFactory : PackageFactory
    {
        public override Packaging CreatePackaging()
        {
            return new HeavyPackaging();
        }

        public override Documentation CreateDocumentation()
        {
            return new PrintedDocument();
        }
    }

    // Abstract Product
    public abstract class Packaging { }

    // Concrete Product
    public class StandardPackaging : Packaging { }

    // Concrete Product
    public class HeavyPackaging : Packaging { }

    // Abstract Product
    public abstract class Documentation { }

    // Concrete Product
    public class RegularPostage : Documentation { }

    // Concrete Product
    public class PrintedDocument : Documentation { }
}
