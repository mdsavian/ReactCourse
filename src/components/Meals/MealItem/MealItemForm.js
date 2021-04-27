import Input from '../../UI/Input/Input'
import classes from './MealItemForm.module.css'

const MealItemForm = (props)=>{
    return (
        <form className={classes.form}>
            
            <Input label="Quantidade" input={{
                id:"quantidade",
                type:"number",
                min:'1',
                max:'5',
                minvalue:'1',
                step:'1',
                defaultValue:'1'
            }}/>
            <button>+ Add</button>

        </form>
    )
}

export default MealItemForm