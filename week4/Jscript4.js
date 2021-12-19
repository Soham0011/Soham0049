var n = new Array();
n[0]="Yaakov";
n[1]="John";
n[2]="Jen";
n[3]="Jason";
n[4]="Paul";
n[5]="Frank";
n[6]="Larry";
n[7]="Paula";
n[8]="Laura";
n[9]="Jim";
for (var i = 0;i < n.length;i++)
{
	if(n[i].charAt(0)==='J'|| n[i].charAt(0)==='j')
	{
        console.log("Goodbye J"+ n[i])
    }
	else
	{
		console.log("Hello "+ n[i])
	}
}