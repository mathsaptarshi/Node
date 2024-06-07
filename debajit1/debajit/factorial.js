function fact(n)
{
    var res =1;
    for(var i=n;i>=1;i--)
    {
        res = res*i;
    }
    console.log(res);
}

fact(5);