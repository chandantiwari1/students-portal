
// program to check if a given string
// is a valid integer
#include <iostream>
using namespace std;
 
// Returns true if s is a number else false
bool isNumber(string s)
{
    for (int i = 0; i < s.length(); i++)
        if (isdigit(s[i]) == false)
            return false;
 
    return true;
}
 
// Driver code
int main()
{
    //example
    // Saving the input in a string
    string input ;
    cout<<"Enter a input:";
    cin>>input;
 
    // Function returns 1 if all elements
    // are in range '0-9'
    if (isNumber(input))
        cout << "Integer";
 
    // Function returns 0 if the input is
    // not an integer
    else
        cout << "String";
}