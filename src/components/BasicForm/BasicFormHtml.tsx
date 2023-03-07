import './basic-form-html.css'

function BasicFormHtml() {

    interface Inputy {
        name:string,
        value:string
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        Array.from(e.target.elements).forEach((el:any) => {
            const obj: Inputy = {
                name : el.name,
                value : el.value
            }
            console.log(obj);
        });
    }

    return (
        <>
            <h3>Basic Form</h3>

            <div>
                <form onSubmit={handleSubmit}>
                    <label>First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                    <label>Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                    <label>Country</label>
                    <select id="country" name="country">
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


export default BasicFormHtml;