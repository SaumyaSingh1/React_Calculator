
export default function GenerateButton({ buttons , showButton}) {
    return (
      <>
      <div >
        {buttons.map(buttonName=> (
          <button key={buttonName} onClick={()=>showButton(buttonName)}>{buttonName}</button>
        ))}
        </div>
      </>
    );
  }
