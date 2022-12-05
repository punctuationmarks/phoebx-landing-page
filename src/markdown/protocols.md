# Protocols

## Encryption

Why encrypt my data? Why care about open source? "I have nothing to hide.", "I'm not interesting", and other rebuttles. - Or -  When all you have is a hammer, the universe becomes a nail. 


### Some basics for this essay
Encryption is the process of running human or machine readable information through mathematical magic that allows for only those with the keys to decipher the end result, or at least that is the goal. In all reality, encryption comes in many flavors and also what should be thought about is what era you are living in as to which encryption method is actual viable and beneficial. Some once standards, like MD5, have since been shown to be full of easily attacked vulnerabilities than anyone with a decent home computer can do. On top of the underlining mathematics of the encryption algorithm, the style of how and where to store the keys is also very important, since if the computer you're storing the keys to the kingdom has been infected with spyware, then it doesn't matter if you had some quantum-resistent encryption that also makes the best pancakes this side of the Missippi, the data is vulnerable. 

So some basic rules to follow: Aim for modern and battle tested algorithms, I'd strayed from the bleeding edge since there might be unknown flaws.
And in 2022, I'd suggest aiming to have "end to end" encryption. This means that every "endpoint" device (like an individual smart phone or laptop) has their own key to see the data on their machine, and that key is not used anywhere else. This means, all data you send the server (assuming you're using a third party to host your data, email, cloud, social media, messaging, etc) is already encrypted before it gets to them. One huge benefit to this system, is if some "bad guy" wants everyone's data who lives in Pittsburg, PA, USA, they can't get it without hacking into every person's device in Pittsburg to get the individual keys. 

#### Be a good citizen - or - "I have nothing to hide from this government"

Sure, you like your local government, and you know for certain they are working towards your best interest 100% of the time and there is no way for any corruption to weasle its way into it. But there are governments around the world that don't have your interest in mind at all, even if they do have the best human rights track record for their own citizens. It has been documented <!-- TODO: add citation, MIT is a good review when they put a server up and saw nearly every country talk to it. --> that governments around the world just bulk collect data of internet traffic. While these governments might be doing nothing nefarious with this data - perhaps they're just using it to create better machine learning models to help their local businesses sell products on the global scale - they still are collecting your data. So how do we help our local economies on the global scale when it comes to bulk surveillance? One answer is that we can encrypt our data. 

#### Be better for the environment - or -  "I'm not important"

Sure, you sold your car a long time ago, you stopped taking showers and only use solar power for your apartment that has amazing electric public transit, but you ask yourself, what else can I do to help the environment (and ideally, some low hanging fruit)? You guessed it, encrypt your data and probably use open source source technologies. Why though? How in the universe could spending computational electricity on encrypting your data be more environmentally friendly? In short, it's to prevent your data being used in machine learning models which are ridiculously energy hungry. To do basic machine learning at home, it takes a midrange graphics processing unit (GPU) to even run a model, so one can only assume what the top machine learning corperations are using to process and create these deep learning models. So how does one avoid this data collection? Use encryption and technologies that don't use or sell your data for machine learning. 


<!-- ## Web


## Crypto


## OS -->