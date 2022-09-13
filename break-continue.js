var roastGiven = 0;
while (roastGiven < 20) {
    if (roastGiven == 10) {
        roastGiven++;
        break;
    }
    console.log(roastGiven);
    roastGiven++;
}

var roastReceive = 0;
while (roastReceive < 20) {
    if (roastReceive == 10) {
        roastReceive++;
        continue;
    }
    console.log(roastReceive);
    roastReceive++;
}
