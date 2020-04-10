using System;

namespace Design_Pattern_Project
{
    /*
     * This is a creational pattern as it is used to control class instantiation. The factory pattern is used to replace class constructors, 
     * abstracting the process of object generation so that the type of the object instantiated can be determined at run-time.
     * 
     * 1. FactoryBase
     * 2. ConcreteFactory
     * 3. ProductBase
     * 4. ConcreteProduct
     */
    public static class FactoryPattern
    {
        public static void PerformPattern()
        {
            CarFactory honda = new HondaFactory();

            var car1 = honda.CreateCar("civic");
            Console.WriteLine($"Car Model Created is: {car1.GetType().Name}");

            var car2 = honda.CreateCar("fit");
            Console.WriteLine($"Car Model Created is: {car2.GetType().Name}");

            var car3 = honda.CreateCar("accord");
            Console.WriteLine($"Car Model Created is: {car3.GetType().Name}");

            CarFactory subaru = new SubaruFactory();

            var car4 = subaru.CreateCar("crosstrek");
            Console.WriteLine($"Car Model Created is: {car4.GetType().Name}");

            var car5 = subaru.CreateCar("forester");
            Console.WriteLine($"Car Model Created is: {car5.GetType().Name}");

            var car6 = subaru.CreateCar("ascent");
            Console.WriteLine($"Car Model Created is: {car6.GetType().Name}");
        }
    }

    // Factory Base
    public abstract class CarFactory
    {
        public abstract Car CreateCar(string model);
    }


    //Concrete Factory
    public class HondaFactory : CarFactory
    {
        public override Car CreateCar(string model)
        {
            switch (model)
            {
                case "civic": return new HondaCivic();
                case "fit": return new HondaFit();
                case "accord": return new HondaAccord();
                default: throw new ArgumentException("Model not found.", "model");
            }
        }
    }

    //Concrete Factory
    public class SubaruFactory : CarFactory
    {
        public override Car CreateCar(string model)
        {
            switch (model)
            {
                case "crosstrek": return new SubaruCrosstrek();
                case "forester": return new SubaruForester();
                case "ascent": return new SubaruAscent();
                default: throw new ArgumentException("Model not found.", "model");
            }
        }
    }


    //Product Base
    public abstract class Car { }

    //Concrete Product
    public class HondaCivic : Car { }

    //Concrete Product
    public class HondaFit : Car { }

    //Concrete Product
    public class HondaAccord : Car { }

    //Concrete Product
    public class SubaruCrosstrek : Car { }

    //Concrete Product
    public class SubaruForester : Car { }

    //Concrete Product
    public class SubaruAscent : Car { }
}
