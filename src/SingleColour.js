import { toast } from "react-toastify";

const SingleColour = ({index,color}) => {

    const {hex,weight} = color;

    const saveToClipBoard = async() => {
        if(navigator.clipboard)
        {
            try{
                await navigator.clipboard.writeText(`#${hex}`);
                toast.success('Colour Copied to ClipBoard Successfully');
            }
            catch{
                toast.error('Error in Copying Color to ClipBoard');
            }
        }
        else{
            toast.error('ClipBoard access not available');
        }
    }

    return (
        <article className={index > 10 ? 'color color-light' : 'color'}  style={{background:`#${hex}`}} onClick={saveToClipBoard}>
            <p className="percent-value">{weight}%</p>
            <p className="color-value" >#{hex}</p>
        </article>
    )
}

export default SingleColour;