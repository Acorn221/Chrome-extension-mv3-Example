# LighterFuel For Tinder

To build, use: yarn build

This chrome extension was initially made to get the date of when photos are uploaded to a tinder profile


# TODO:
  - find a way for craco to merge different js files into one
  - do the reverse image search button (have to use bing images :() - done
  - do the enlarge button  - done
  - upgrade to manifest V3
  - use the openAI GPT3 beta to suggest/send messages lol
    - create the prompt
      - initial description
        - get the users name, get the matches name - done
        - get the matches interests (if possible) - done
        - get their age (if possible)
        - their country - done
        - their spotify favourite artists / song (if possible)
      - existing chat - done
        - save all messages to background variable - done
    - FIXME: setting of the match user data
    - 
    - Create button
      - both in mobile and desktop format
    - create config
      - UI
        - settings
          - information card
          - API key entering - done
          - advanced controls
            - prompt
            - information included in prompt
          - sigma male mode (generates the text then just submits it to the match on high temperature, with a sigma male prompt)
      - settings storage in background.js - done
      - temperature adjustment slider - done
      - best of slider (should be around 3 imo) - done
    - make tutorial page on how to get the API key and link to TOS
    - TOS disclaimers!
    - create API request method


  - sort out the background images proxy stuff and just make it an object with images inside
  - have a "first uploaded" for the oldest uploaded image -- IN PROGRESS
    https://api.gotinder.com/v2/recs/core?locale=en-GB look for these requests for the people data, look for the images and group them to find the earliest image
    request the lowest quality image (84x84) and look at the last modified date!

  - get the user's name and location https://api.gotinder.com/v2/profile?locale=en-GBinclude=likes%2Cofferings%2Cplus_control%2Cpurchase%2Cuser
  - add comments to the code -- IN PROGRESS
  - upload for approval!

# DONE


# Potential features / things to do
 - List all people swiped on before
  - could have an option to auto swipe on them
 
 - List whether or not they're paid, in the matches REST response it has: "subscription_tier": "plus", for certain users
 - find out what the image "score" is in matches REST reply
 - find out what "is_opener" is in matches REST reply