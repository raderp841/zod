import { SubmitHandler, useForm } from 'react-hook-form';
import '../BasicForm/basic-form-html.css';

type Inputs = {
    firstName: string,
    lastName: string,
    country: string
}

function BasicFormWithUseHookHtml() {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <>
            <h3>Basic Form with UseForm</h3>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>{errors.firstName && errors.firstName.message}</p>
                    <label>First Name</label>
                    <input 
                        {
                            ...register(
                                "firstName",
                                {
                                    required: "please enter your first name",
                                    minLength: {value: 5, message: "first name must be 5 characters or more"}
                                }
                            )
                        } 
                        placeholder="Your name.." 
                    />

                    <label>Last Name</label>
                    <input {...register("lastName")} placeholder="Your last name.." />

                    <label>Country</label>
                    <select id="country" {...register("country")}>
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select>
                
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
}


export default BasicFormWithUseHookHtml;