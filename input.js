function Sminput (props){
    const [label, type]= props
    return (
        <>
        <TextField id="outlined-basic" label={label} type={type} variant="outlined" />
        </>
    )
}
export default Sminput;