var factorial=  function(n)
{
    var res =1;
    for(var i=n;i>=1;i--)
    {
        res = res*i;
    }
    //console.log(res);
    return res;
}

//fact(5);
module.exports = factorial;