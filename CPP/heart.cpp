//program to print a heart pattern in C
#include <stdio.h>
int main()
{
    int x = 0,y = 0;
    unsigned int size = 0;
    printf("Enter the size = ");
    scanf("%u",&size);
    for(x=(size/2); x<=size; x+=2)
    {
        for(y=1; y<(size-x); y+=2)
        {
            printf(" ");
        }
        for(y=1; y<=x; ++y)
        {
            printf("*");
        }
        for(y=1; y<=(size-x); ++y)
        {
            printf(" ");
        }
        for(y=1; y<=x; ++y)
        {
            printf("*");
        }
        printf("\n");
    }
    for(x=size; x>=1; --x)
    {
        for(y=x; y<size; ++y)
        {
            printf(" ");
        }
        for(y=1; y<=(x*2)-1; ++y)
        {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}