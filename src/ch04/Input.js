function Input({ value, ph }) {

    const handleKeyDown = () => {
        
    }

    
    return <input type="text" value={value} placeholder={ph} onKeyDown={ handleKeyDown }/>
}

export default Input;