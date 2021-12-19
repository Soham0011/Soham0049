var n = new Array();
n[0]="Soham";
n[1]="pranay";
n[2]="Kshitij";
n[3]="jamshed";
n[4]="Jamal";
n[5]="ryan";
n[6]="Jackob";
n[7]="jack";
n[8]="Bilal";
n[9]="jim";
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