function fact()
{
    var n=5;
    var res=1;
    for(var i=n;i>1;i--)
    {
        res=res*n;
        n=n-1;
    }
    console.log('The Factorial of given number:'+ res);
}
fact()