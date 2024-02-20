import { useState } from "react";
import { useForm } from "react-hook-form";

const SignupForm = () => {
    const { register, handleSubmit } = useForm('')

   /*  const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAdress] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [phone, setPhone] = useState(''); Queda comentado por la implementación del react-hook-form*/

    const handleClearClick =() =>{
      /*   setName('');
        setAge('');
        setAdress('');
        setZipcode('');
        setPhone(''); */

    };

    const handleSubmitForm =(data) =>{
      console.log(data);
    /*     console.log('submit:',{
            name,
            age,
            address,
            zipcode,
            phone,
        });*/
    }; 

   return (
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <label>
                Name
                <input {...register('name')} required />
            </label>
            <br />
            <label>
                Age
                <input {...register('age')}required  />
            </label>
            <br />
            <label>
                Address
                <input{...register('address')} required />
            </label>
            <br />
            <label>
                Zipcode
                <input {...register('zipcode')} required />
            </label>
            <br />
            <label>
                Phone
                <input {...register('phone')} required />
            </label>
            <br />
            <div>
                <button type="button" onClick={handleClearClick}>Clear</button>
                <button type="submit">Submit</button>
            </div>
        </form>
   );
    
};

export default SignupForm;