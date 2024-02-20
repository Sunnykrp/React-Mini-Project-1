export default function Mini()
{
    const cssStyle={};
    let curDate=new Date(2024,2,20,1);
    curDate=curDate.getHours();
    let greeting='';
    if(curDate>=1 && curDate<12)
    {
       greeting="Good Morning"; 
       cssStyle.color='green';
    }
    else if(curDate>=12 && curDate<19)
    {
        greeting="Good AfterNoon";
        cssStyle.color='Orange';
    }
    else
    {
        greeting="Good Night";
        cssStyle.color='Black';
    }
    return(
        <div>
        <h1 className="heading">Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
        </div>
    );
}