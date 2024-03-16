
type Props = {
    params: {
        id: string
    }
}

function ProductDetails({ params } : Props) {


    //TODO fetch data for product id?

    let a: number = 1;
    let b: string | number | undefined = 'asd';


    b = 1;
    b = "asd";
    b = undefined;

    interface Person {
        firstName: string
        lastName: string
        age: number
        pets?: string[] // Optional
        run: (distance: number) => void
    }

    type PersonSubset = Pick<Person, 'firstName' | 'age'>
    type PersonWithoutAge = Omit<Person, 'age'>
    type UnknownPerson = Partial<Person>

    const subhuman: PersonSubset = {
        firstName: "Asd",
        age: 23
    }

    interface SuperHuman extends Person {
        specialAbility: string
    }

    const person2: Person = {
        firstName: "Peter",
        lastName: "Petrov",
        age: 36,
        run: (distance) => console.log('I am running', distance)
    }

    const person: Person = {
        firstName: "Ivan",
        lastName: "Ivanov",
        age: 25,
        pets: ["cat", "dog", "elephant"],
        run: (distance) => console.log('I am running too', distance)
    }




    return(
        <div>
            Product details {params.id}
        </div>
    )
}

export default ProductDetails