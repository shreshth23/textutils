import React,{useState} from 'react'

export default function AboutUs() {

    const [style,setstyle] = useState({
        color:'black',
        backgroundColor:'white'
    });
    const [color,setColor] = useState('dark');

    let toggleMode = ()=>{
        if(style.color==='black'){
            setstyle({
                color:'white',
                backgroundColor:'black',
                border:'1px solid white'
            });
            setColor("light");
        }else{
            setstyle({
                color:'black',
                backgroundColor:'white',
            });
            setColor("dark");
        }
    }


  return (
    <div className='container my-3' style={style}>
        <h2 className='mx-2'>AboutUs</h2>
        <div className="accordion accordion-flush" id="accordionFlushExample" style={style}>
            <div className="accordion-item" style={style}>
                <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" type="button" style={style} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                </div>
            </div>
            <div className="accordion-item" style={style}>
                <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
            </div>
            <div className="accordion-item" style={style}>
                <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
            </div>
        </div>
        <div className='container my-3'>
            <button className='btn btn-primary' onClick={toggleMode}>Enable {color} Mode</button>
        </div>
    </div>
  )
}
