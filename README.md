# UFOs
## Overview
The purpose of this project was to experiment with connecting .css, .js, and .html files in order to create a functioning website. The .css file was used simply as a formatting service to the .html file. The .js files were used to store the data and to create the functions that would change the results based on the filters added. The .html file was used in order to produce a functioning website.
## Results
The website shows a description of the processes that Dana was interested in, as a sort of biography, along with a filtering option to find a table that shows different UFO sightings. The following image shows the options for filtering:
![image](https://user-images.githubusercontent.com/85752084/144120929-6ea1f6c0-c9ec-4d0e-a2b0-93b8ada5b6e2.png)

With a properly functioning .js and .html collaboration, the filtering would lead to a filtered table. There was an error somewhere in the code, which I reviewed several times, and could not find the problem. This leads me to believe the <script> lines were not correct or in the correct location. In addition, the d3.js might have been messed up. I am not sure which. This is what the <script> lines show:
  ```
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.11.0/d3.js"></script>
    <script type="text/javascript" src="static/js/data.js"></script>
    <script type="text/javascript" src="static/js/app.js"></script>
</body>
  ```
  
  Again, I am not sure what the issue was, as I could not find it. I will update this problem in the issues tab.
  ## Conclusion
  One drawback of this webpage is that the table function does not work as it is supposed to. For further development, I would fix the table, and I would include an option for images to pop up if the table row was selected.
  
