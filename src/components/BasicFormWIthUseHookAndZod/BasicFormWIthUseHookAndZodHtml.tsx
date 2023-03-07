import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


import '../BasicForm/basic-form-html.css';

const formSchema = z.object({
    firstName: z.string()
        .min(1, "first name is required")
        .min(3, "first name must be at least 3 characters"),
    lastName: z.string(),
    country: z.string()
})
.refine(data => 
    !(data.firstName === 'Peter' && data.country === 'utah'),
    {
        message: "Utah is invalid for Peter",
        path: ['country']
    });

type FormSchema = z.infer<typeof formSchema>;

function BasicFormWithUseHookAndZodHtml() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormSchema>({resolver: zodResolver(formSchema)});

    const onSubmit: SubmitHandler<FormSchema> = data => console.log(data);

    return (
        <>
            <h3>Basic Form with UseForm and ZOD</h3>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>{errors.firstName && errors.firstName.message}</p>
                    <label>First Name</label>
                    <input 
                        placeholder="Your name.." 
                        {...register("firstName")} 
                    />

                    <label>Last Name</label>
                    <input 
                        {...register("lastName")} 
                        placeholder="Your last name.." 
                    />

                    <p>{errors.country && errors.country.message}</p>
                    <label>Country</label>
                    <select id="country" {...register("country")}>
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="utah">Utah</option>
                    </select>
                
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
}


export default BasicFormWithUseHookAndZodHtml;