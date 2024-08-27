import React, { Children, cloneElement, isValidElement, useEffect, useRef, useState } from 'react'


let counter = 1;
const Form = ({ children, controlled, onSubmit = () => { }, onFormChange = () => { },...otherProps }) => {
    const [formValues, setFormValues] = useState({})
    const formValuesRef = useRef({})

    const formatChildren = (kids) => {
        return Children.map(kids, child => {
            if (isValidElement(child)) {
                // Check if the child is an input element
                if (child.type === 'input') {
                    if (controlled) {
                        return cloneElement(child, {
                            value: formValues[child.props.name] || "",
                            onChange: (e) => {
                                setFormValues(prev => { 
                                    onFormChange({ ...prev, [child.props.name]: e.target.value },resetFunction)
                                    return { ...prev, [child.props.name]: e.target.value }
                                })
                            }
                        })
                    }
                    // not controlled
                    else return cloneElement(child, {
                        onChange: (e) => {
                            formValuesRef.current = { ...formValuesRef.current, [child.props.name]: e.target.value }
                            onFormChange(formValuesRef.current, () => console.error("restFunction available only in controlled mode") )

                        }
                    })


                }
                return cloneElement(child,
                    {
                        children: child.props.children ? formatChildren(child.props.children) : null
                    }
                )
            }
            return child;
        });

    };

    const resetFunction = (key) => {
        if (key) {
            setFormValues(pre => ({ ...pre, [key]: "" }))
        }
        else setFormValues({})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (controlled){
            onSubmit({ e, data: controlled ? formValues : formValuesRef.current }, resetFunction)
        }
        else{
            onSubmit({ e, data: controlled ? formValues : formValuesRef.current }, ()=>console.error("restFunction available only in controlled mode"))  
        }
        
        
    }

    return (
        <form {...otherProps} onSubmit={submitHandler}>
            {formatChildren(children)}
        </form>
    )
}

export default Form