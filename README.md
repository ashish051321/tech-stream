# tech-stream
Spreading knowledge sourced from content creators sitting in corporate offices

#Some thoughts on Hosting Strategy:-

a. Use AWS EC2 t4.micro instance(Free Tier 12 months, 750 hours monthly) - For hosting Spring Boot App using docker and put an nginx server in front of it for enabling LetsEncrypt SSL
CPU: 2 vCPUs
RAM: 1 GB
Network Performance: Low to Moderate
Storage: EBS-only (Can attach EBS volumes) - 8 GB
Instance Store Volumes: Not supported
Architecture: 64-bit
Processor: Intel Xeon Platinum 8000 series or higher
Operating Systems: Amazon Linux 2, Amazon Linux, Ubuntu, Windows Server, and other operating systems
Free Data Transfer limit: 15 GM (not sure, how this is calculated/tracked)

b. Use Amazon RDS - 20GB of free storage for 1 year
Use this for storing your tech stream data + user login info + audit info etc
https://www.youtube.com/watch?v=Tbf7F42tcBw&ab_channel=JavaTechie
--

Note 1: Using Lambda and Dynamo DB combination is not ideal for long term vision of this product.
Note 2: We will allow this setup to run for the forseeable future and as an when the requirements increase, we will look for paying more to AWS to use their services, or even consider other solutions like VPS hosting from hostgator
https://www.hostgator.in/vps-hosting (Paying approximately 1000 to 1500 per month)
Note 3: We are going to move the entire app under one spring boot app with angular also sitting inside it.
Note 4: More research to be done on :-
Login and securing APIs
Usage of RDBMS or no sql database(dynamo db)
