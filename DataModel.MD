	Our Data Model needs to hold data for objects of the place, priority, and box. These models are important because they are directly related to the drag and drop mechanic and will be serving as the basis of what the client will interact with. The Box will hold the place object when dropped into the correct box and if they match types then it will be accepted. The Place will hold descriptions of all sortable types as well as population, where, and if it is on the board. The Priority will give a specific priority to the place while being inside the same box therefore “mapping” in which order the client would like to travel to.

    Necessary Interfaces
      Place Interface
      Priority Value Interface
       Box

    Box interface
      String Continent
      Boolean holdingPlace
      Place place

    The Place interface 
      String Name
      String Country
      String Description
      String Continent
      Int Population
      Int Average Tourist Count
      Int priority
      Boolean onMap

    Priority Value Interface
      Int Value
      Place place 
      Boolean onMap
