# aTools

I wasnt able to use ANT design components as I use React scripts version 5.0.0 and ANT isnt yet available for this version. AN issue has been opened in the ANT official git repo but hasnt been resolved yet.
Here is the pictures stating that:-

![image](https://user-images.githubusercontent.com/73885838/153148211-53970472-3ef4-4b1b-9949-c061233654e1.png)
![image](https://user-images.githubusercontent.com/73885838/153148571-677835b4-ee5d-4ac4-9bcd-d8ec192c5398.png)


So, instead of using ANT, I used Bootstrap as stated in the assignment.

Site is deployed at https://atools.netlify.app/ 

Some images of the working site:-
Desktop View:-
![image](https://user-images.githubusercontent.com/73885838/153149480-edbeecf4-adfb-441d-b5fa-7e68e414e1fa.png)

Mobile View:-
![image](https://user-images.githubusercontent.com/73885838/153149823-9ad86e25-3bee-4ce1-8800-423440dbccb4.png)

Completely responsive site with different media querie sizes and breakpoints. 
Gives a success or error message according to the correct login.

If on login button click, you are getting an alert called: "Error: User Does Not Exist", it means that the login credentials 
arent registered on the reqres login api and the post request responded with a status of 400.

On successful login like with
email: eve.holt@reqres.in
password: cityslicka, 
it will show that login was succesful and display the token
![image](https://user-images.githubusercontent.com/73885838/153151867-be418031-a147-44c8-bbfb-0b9fabc4c708.png)

If any of the fields ae kept empty, it will alert the user that which fields have been kept empty.
