
#include<iostream>
#include<vector>
#include<algorithm>
#include<math.h>
#include <ctime>
#include <cstdlib>
#include <windows.h>

using namespace std ;

void menu(){
            cout<<"<<<<<----------------------->>>>>>"<<endl;
            cout<<"||     1 : FOR addition         ||"<<endl;
            cout<<"||     2 : FOR substraction     ||"<<endl;
            cout<<"||     3 : FOR multiplication   ||"<<endl;
            cout<<"||     4 : FOR devision         ||"<<endl;
            cout<<"||     5 : FOR power(eg: 2^3)   ||"<<endl;
            cout<<"||     6 : FOR dollar to ruppe  ||"<<endl;
            cout<<"||     7 : FOR addition         ||"<<endl;
            cout<<"||     8 : FOR addition         ||"<<endl;
            cout<<"||     0 : FOR exit             ||"<<endl;
            cout<<"<<<<<------------------------>>>>>"<<endl;
}

double add(double a ,  double b ){
        return a + b ;
}

double sub(double a ,  double b ){
        return a - b ;
}

double mul(double a ,  double b ){
        return a * b ;
}

double div(double a ,  double b ){
        return a / b ;
}

double power(double a ,  double b ){
        return pow(a,b) ;
}
 

double conv(  double b ){
        double a = 89.7;
        return a * b ;
}


void setColor(int color) {
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), color);
}



int main(){
        double A ,B ;
        char push ;
while(1){

        system("cls");
        setColor(5);
        menu();
        char choice ;
        cout<<"========================"<<endl;
        cout<<"|| ENTER YOUR CHOICE  ||"<<endl;
        cout<<"========================"<<endl;
        cin>>choice;
        system("cls");
        setColor(1);
        switch (choice)
        {
        case '1':
               

               cout<<"==========================\n";
               cout<<"||                      ||\n";
               cout<<"||                      ||\n";
               cout<<"|| ENTER  A :  ";
               cin>>A;
               cout<<"||                      ||\n";
               cout<<"|| ENTER  B :  ";
               cin>>B;
               cout<<"||                      ||\n";
               cout<<"==========================\n";
               cout<<"||                      ||\n";
               cout<<"||  A + B = "<<add(A,B)<<"         ||\n";
               cout<<"||                      ||\n";
               cout<<"==========================\n";
               cout<<"press 'r' key to continue";
                               
           cin>>push; 
             
                break;

                 case '2':
              

               cout<<"==========================\n";
               cout<<"||                      ||\n";
               cout<<"||                      ||\n";
               cout<<"|| ENTER  A :  ";
               cin>>A;
               cout<<"||                      ||\n";
               cout<<"|| ENTER  B :  ";
               cin>>B;
               cout<<"||                      ||\n";
               cout<<"==========================\n";
               cout<<"||                      ||\n";
               cout<<"||  A - B = "<<sub(A,B)<<"         ||\n";
               cout<<"||                      ||\n";
               cout<<"==========================\n";
               cout<<"press 'r' key to continue";
                                
           cin>>push; 
             
                break;
                 case '3':
            

               cout<<"==========================\n";
               cout<<"||                      ||\n";
               cout<<"||                      ||\n";
               cout<<"|| ENTER  A :  ";
               cin>>A;
               cout<<"||                      ||\n";
               cout<<"|| ENTER  B :  ";
               cin>>B;
               cout<<"||                      ||\n";
               cout<<"==========================\n";
               cout<<"||                      ||\n";
               cout<<"||  A x B = "<<mul(A,B)<<"         ||\n";
               cout<<"||                      ||\n";
               cout<<"==========================\n";
               cout<<"press 'r' key to continue";
                               
           cin>>push; 
             
                break;
                 case '4':
                                

               cout<<"==========================\n";
               cout<<"||                      ||\n";
               cout<<"||                      ||\n";
               cout<<"|| ENTER  A :  ";
               cin>>A;
               cout<<"||                      ||\n";
               cout<<"|| ENTER  B :  ";
               cin>>B;
               if(B == 0){
                                cout<<"invalid !! 0 can't be used as dominater retry ";
                                break;
               }
               cout<<"||                      ||\n";
               cout<<"==========================\n";
               cout<<"||                      ||\n";
               cout<<"||  A / B = "<<div(A,B)<<"         ||\n";
               cout<<"||                      ||\n";
               cout<<"==========================\n";
               cout<<"press 'r' key to continue";
                             
           cin>>push; 
             
                break;
                 case '5':
               

               cout<<"==========================\n";
               cout<<"||                      ||\n";
               cout<<"||                      ||\n";
               cout<<"|| ENTER  A :  ";
               cin>>A;
               cout<<"||                      ||\n";
               cout<<"|| ENTER  B :  ";
               cin>>B;
               cout<<"||                      ||\n";
               cout<<"==========================\n";
               cout<<"||                      ||\n";
               cout<<"||  A ^ B = "<<power(A,B)<<"         ||\n";
               cout<<"||                      ||\n";
               cout<<"==========================\n";
               cout<<"press 'r' key to continue";
                               
           cin>>push; 
             
                break;
                 case '6':
                

               cout<<"==========================\n";
               cout<<"||                      ||\n";
               cout<<"||                      ||\n";
               cout<<"|| ENTER  A :  ";
               cin>>A;
               cout<<"||                      ||\n";          
               cout<<"||                      ||\n";
               cout<<"==========================\n";
               cout<<"||                      ||\n";
               cout<<"||   B = "<<conv(A)<<"           ||\n";
               cout<<"||                      ||\n";
               cout<<"==========================\n";
               cout<<"press 'r' key to continue";
                                
           cin>>push; 
           break;

                        case '0':
                        exit(0);
             
                break;
        
        default:
        cout<<"wrong choice try again (()) ";
                break;
        }
}
        
}