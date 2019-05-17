# Validity Take Home Assessent

## Intro

This take home assessment form Validity is a demonstration of my ability to create a web application.

This application uses a React Frontend and Rails MVC backend. Validity uses a Spring MVC backend. Because Spring and Rails have a MVC framework, Recoding this chalenge to a Spring backend would not be a problem and I would gladly do it upon request.

## Backend:

I would like to say I also went the extra mile in this assessment and fulfilled the advanced challenge which was to create an algorithim to extract the duplicate user records from the advanced data set as well as the normal dataset.

The algorithim uses soundex which is a phonetic coding system intended to suppress spelling variations, used especially to encode surnames for the linkage of medical and other records.

below is a code snipet to extract duplicates

```ruby
    h1 = {}
    h2 = {}
    h3 = {}
    dup_hsh = {}
    answer = []
    self.all.each do |a|
        if h1[a.first_name.soundex] && h2[a.last_name.soundex] && h3[a.email.soundex]
            dup_hsh[(a.first_name+' '+a.last_name).soundex] = a

        else
            h1[a.first_name.soundex] = a.id
            h2[a.last_name.soundex] = a.id
            h3[a.email.soundex] = a.id
        end
    end
    self.all.each do |a|
        if dup_hsh[(a.first_name + ' ' + a.last_name).soundex]
            answer.push(a)
        end
    end
    answer
```


The Time complexity of the algorithm is O(n) because I loop through all the user records twice to extract duplicates

The space complexity is also O(n) because I am creating hashes of n size with keys of their encrypted values.


## Frontend:

Because the position will focus heavily on the frontend, I created a frontend to display the data extracted from the backend.  The frontend makes to calls to the backend.  The first call is the extracted duplicates explained in the backend section above.  The second call is to get the actual duplicates to check to see if I extracted the correct information.

In the prompt the actual duplicates were identified by having the same Id.  Therefore I extracted the actual duplicates by selecting the records with reoccurring Ids.

To display the records in a clean and organized manner I placed the information in a react table.  This way the user can sort by attribute of their choice.  Moreover, I added additional functionality which was to swap the actual and the extracted duplicates by clicking the buttons that are located above the table.  There is no change because the duplicate values are exactly the same as the actual duplicate values as intended.

## Thank you

Thank you for giving me the oppurtunity to demonstrate my knowledge and skills. In the future, I hope to grow further with you.

I look foward to you getting back to me to further discuss my code.
