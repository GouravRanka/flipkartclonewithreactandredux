const initialstate=1;
export const reducer = (state=initialstate,action)=>
{
switch(action.type)
{
    case "INCREMENT": return state+1;
    default : return state;
}
    
}