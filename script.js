const QDATA=[
{id:25,topic:'Security',unit:'3.5',lvl:'SL',marks:2,text:'NAT (Network Address Translation) is primarily used to:',opts:['Encrypt all traffic between a device and the internet','Hide internal IP addresses from external networks and conserve public IP space','Block access to malicious websites automatically','Speed up DNS resolution by caching responses locally'],ans:1,exp:'NAT translates private internal IPs (192.168.x.x) to a single public IP, hiding the internal network from outside. It conserves public IP addresses and adds a layer of obscurity. A VPN is different — it creates an encrypted tunnel.'},
// ===== SECURITY — VPN =====
{id:26,topic:'Security',unit:'3.5',lvl:'SL',marks:2,text:'What does a VPN (Virtual Private Network) primarily do?',opts:['Speeds up your internet connection by caching websites locally','Encrypts your internet connection so data is secure before leaving the device','Assigns a new MAC address to your network interface','Blocks advertisements and trackers on websites you visit'],ans:1,exp:'A VPN encrypts the connection between your device and the internet, creating a secure "tunnel". Even if data is intercepted on a public network, it cannot be read without the encryption key.'},
{id:27,topic:'Security',unit:'3.5',lvl:'SL',marks:2,text:'When is using a VPN most strongly recommended?',opts:['At home on a private, password-protected network','On public Wi-Fi networks (cafes, airports, hotels) when transferring sensitive data','Only when accessing government websites','When streaming video to improve playback quality'],ans:1,exp:'VPNs are most critical on public Wi-Fi, where anyone on the same network could potentially intercept unencrypted traffic. At home on a private network the risk is much lower.'},
// ===== SECURITY — Encryption =====
{id:28,topic:'Security',unit:'3.5',lvl:'SL',marks:2,text:'What is data encryption?',opts:['Compressing data to reduce its file size for faster transmission','Converting plaintext into ciphertext using an algorithm and key to prevent unauthorised access','Creating a backup copy of data to a remote location','Verifying the identity of a user before allowing system access'],ans:1,exp:'Encryption converts readable plaintext into scrambled ciphertext using an algorithm and encryption key. Only someone with the correct decryption key can convert it back to readable plaintext.'},
{id:29,topic:'Security',unit:'3.5',lvl:'HL',marks:4,text:'What is the key difference between symmetric and asymmetric encryption?',opts:['Symmetric is stronger; asymmetric is weaker','Symmetric uses the same key to encrypt and decrypt; asymmetric uses a public key to encrypt and a private key to decrypt','Asymmetric uses the same key; symmetric uses two different keys','Symmetric encryption is only used for emails; asymmetric for websites'],ans:1,exp:'Symmetric: one shared key encrypts and decrypts — fast but the key must be shared securely. Asymmetric: public key encrypts (anyone can have it), private key decrypts (only the owner has it). HTTPS uses asymmetric to exchange a symmetric session key.'},
// ===== SECURITY — MAC Filtering =====
{id:30,topic:'Security',unit:'3.5',lvl:'SL',marks:2,text:'What is a significant disadvantage of MAC address filtering as a security measure?',opts:['It slows down network performance significantly','MAC addresses can be easily spoofed, bypassing the filter','It only works on wired networks, not wireless','It requires expensive specialist hardware to implement'],ans:1,exp:'MAC spoofing allows an attacker to impersonate an authorised device by changing their MAC address to one on the whitelist. This renders MAC filtering ineffective as a standalone security measure.'},
// ===== SYSTEMS — Redundancy =====
{id:31,topic:'Systems',unit:'3.3',lvl:'SL',marks:2,text:'What is the primary purpose of redundancy in a computer network?',opts:['To increase the maximum speed of all connections','Ensure continued operation if one component fails, preventing total system failure','To reduce the overall cost of network infrastructure','To simplify the configuration and management of the network'],ans:1,exp:'Redundancy provides backup components or pathways that automatically take over when a primary element fails. Without redundancy, a single hardware failure could take down an entire system.'},
{id:32,topic:'Systems',unit:'3.3',lvl:'HL',marks:4,text:'RAID (Redundant Array of Independent Disks) applies the redundancy principle by:',opts:['Storing all data on a single faster disk to maximise speed','Spreading or mirroring data across multiple drives so a single drive failure does not cause data loss','Compressing all data to reduce storage space requirements','Encrypting data across multiple drives for enhanced security'],ans:1,exp:'RAID 1 mirrors identical data across two drives — if one fails, the other contains all data. RAID 5 uses parity information spread across 3+ drives, allowing recovery from any single drive failure. This is a practical, real-world application of redundancy.'},
// ===== SYSTEMS — Fundamental vs Compound =====
{id:33,topic:'Systems',unit:'1.1',lvl:'SL',marks:2,text:'What is a fundamental operation of a computer?',opts:['An operation that takes more than 10 steps to complete','A basic single action such as input, output, processing, or storage','An operation requiring multiple components to work together','Any operation that involves the internet or a network'],ans:1,exp:'Fundamental operations are the basic building blocks a computer performs: input (receiving data), output (displaying/sending data), processing (performing calculations), and storage (saving data). These cannot be broken down further.'},
{id:34,topic:'Systems',unit:'1.1',lvl:'SL',marks:2,text:'Which of the following is an example of a COMPOUND operation?',opts:['Pressing a key on a keyboard (input)','Displaying a single pixel on screen (output)','Printing a report (involves input, processing, storage, and output combined)','Storing a single byte in RAM (storage)'],ans:2,exp:'Printing a report is compound because it combines multiple fundamental operations: reading the file (input), formatting the data (processing), possibly saving a print queue (storage), and sending to the printer (output). Compound operations are made of multiple fundamental operations working together.'},
// ===== DATA — Binary & ASCII =====
{id:35,topic:'Data',unit:'2.1',lvl:'SL',marks:2,text:'What is the decimal value of binary number 1010?',opts:['8','10','12','14'],ans:1,exp:'Binary 1010 = (1×8)+(0×4)+(1×2)+(0×1) = 8+0+2+0 = 10. Each bit position represents a power of 2 from right to left: 1, 2, 4, 8, 16...'},
{id:36,topic:'Data',unit:'2.1',lvl:'SL',marks:2,text:'The ASCII decimal code for a space character is:',opts:['0','32','64','128'],ans:1,exp:'Space = ASCII 32 (binary 00100000, hex 20). Values 0–31 are non-printable control characters. 32 is the first printable character — the space. "A"=65, "a"=97, "0"=48.'},
{id:37,topic:'Data',unit:'2.1',lvl:'SL',marks:2,text:'Why is binary (base-2) used in digital computers rather than decimal (base-10)?',opts:['Binary calculations are always faster than decimal calculations','Electronic transistors naturally have two stable states (on/off = 1/0), which maps perfectly to binary','Binary requires less memory than decimal for the same numbers','Binary is easier for humans to read and understand than decimal'],ans:1,exp:'Transistors switch between two stable voltage states: high (1) and low (0). This maps directly to binary digits. Reliably representing 10 distinct voltage levels in hardware would be far more complex and error-prone.'},
// ===== DATA — Hexadecimal & Colour =====
{id:38,topic:'Data',unit:'2.1',lvl:'SL',marks:2,text:'Why is hexadecimal frequently used in computing instead of binary?',opts:['Hexadecimal is faster to process than binary in CPUs','Hexadecimal is more compact — one hex digit represents exactly 4 bits, making binary easier to read','Hexadecimal is required by the TCP/IP networking protocols','Hexadecimal can represent negative numbers; binary cannot'],ans:1,exp:'One hex digit (0–F) represents exactly 4 binary bits (a nibble). So 8 bits = 2 hex digits. This makes large binary numbers much more compact and readable. For example, binary 11111111 = hex FF = decimal 255.'},
{id:39,topic:'Data',unit:'2.1',lvl:'SL',marks:2,text:'What is the decimal value of hexadecimal F?',opts:['10','14','15','16'],ans:2,exp:'Hexadecimal uses digits 0–9 then A=10, B=11, C=12, D=13, E=14, F=15. So hex F = decimal 15. One hex digit goes from 0 to 15 (16 possible values = 4 bits).'},
{id:40,topic:'Data',unit:'2.1',lvl:'SL',marks:2,text:'How many bits are required to represent the colour of one pixel in 24-bit colour?',opts:['8 bits','16 bits','24 bits','32 bits'],ans:2,exp:'24-bit colour uses 8 bits for red + 8 bits for green + 8 bits for blue = 24 bits per pixel. Each colour channel can have 256 values (0–255).'},
{id:41,topic:'Data',unit:'2.1',lvl:'SL',marks:2,text:'What is the maximum number of colours that can be represented in 24-bit colour?',opts:['256','65,536','16,777,216','4,294,967,296'],ans:2,exp:'24-bit colour = 2²⁴ = 16,777,216 possible colours. This is calculated as 256 × 256 × 256 (256 values per RGB channel). This is why 24-bit is called "True Colour" — it is beyond the limit of human colour perception.'},
// ===== COMPUTER ARCHITECTURE =====
{id:42,topic:'Computer Architecture',unit:'2.1',lvl:'SL',marks:2,text:'What is the function of the Control Unit (CU) in a CPU?',opts:['Performs all arithmetic and logical calculations','Manages and coordinates execution of instructions — controls the fetch-decode-execute cycle and data flow between components','Stores frequently accessed data to speed up processing','Holds the results of calculations temporarily during processing'],ans:1,exp:'The CU is the manager of the CPU. It fetches instructions from memory, decodes them to determine the required operation, and sends control signals to other components (like the ALU) to execute them. It does NOT perform calculations — that is the ALU.'},
{id:43,topic:'Computer Architecture',unit:'2.1',lvl:'SL',marks:2,text:'What does the ALU (Arithmetic Logic Unit) do?',opts:['Controls the sequence in which instructions are executed','Stores data temporarily between operations','Performs all arithmetic operations (add, subtract) and logical operations (AND, OR, NOT, comparisons)','Fetches instructions from main memory and decodes them'],ans:2,exp:'The ALU performs the actual calculations: arithmetic (addition, subtraction, multiplication, division) and logical operations (AND, OR, NOT, comparisons like greater-than). The CU directs it; the ALU does the computational work.'},
{id:44,topic:'Computer Architecture',unit:'2.1',lvl:'SL',marks:2,text:'What is the purpose of cache memory?',opts:['To provide permanent backup storage for the operating system','To store frequently used instructions and data close to the CPU, reducing access time compared to RAM','To temporarily hold user files that are too large to fit in RAM','To store the BIOS and firmware settings between system restarts'],ans:1,exp:'Cache is very fast memory physically close to or inside the CPU. It stores recently or frequently used data and instructions so the CPU can access them in nanoseconds rather than waiting for RAM. L1 cache is fastest (inside CPU); L2 and L3 are slightly slower but larger.'},
{id:45,topic:'Computer Architecture',unit:'2.1',lvl:'SL',marks:2,text:'What is the correct order of the fetch-decode-execute cycle?',opts:['Decode → Fetch → Execute','Execute → Fetch → Decode','Fetch → Decode → Execute','Fetch → Execute → Decode'],ans:2,exp:'Fetch: CU retrieves the next instruction from memory. Decode: CU interprets the instruction to determine what operation is needed. Execute: CU sends signals to ALU or memory to carry out the instruction. This cycle repeats continuously while the CPU runs.'},
{id:46,topic:'Computer Architecture',unit:'2.1',lvl:'HL',marks:4,text:'What is the key difference between the CU and the CPU?',opts:['The CU and CPU are different names for the same component','The CPU is the entire processor chip (containing CU, ALU, and registers); the CU is one functional component inside it that manages instruction execution','The CU is faster than the CPU and handles all the actual computation','The CPU manages instruction flow while the CU performs arithmetic calculations'],ans:1,exp:'The CPU is the whole processor (e.g. Intel Core i7). Inside it are the CU (manages fetch-decode-execute), ALU (performs calculations), and registers (ultra-fast temporary storage). The CU is a sub-component of the CPU — like a manager within a factory.'},
// ===== OOP =====
{id:47,topic:'OOP',unit:'4.4',lvl:'SL',marks:2,text:'In Object-Oriented Programming, what is a class?',opts:['A specific instance of an object held in memory','A blueprint or template that defines the properties and behaviours of a type of object','A method that performs an operation on an object','A type of loop used specifically in OOP languages'],ans:1,exp:'A class is a blueprint defining what properties (attributes/variables) and behaviours (methods) objects of that type will have. It does not occupy memory itself — it is the design. A Car class defines that all cars have colour, speed, etc.'},
{id:48,topic:'OOP',unit:'4.4',lvl:'SL',marks:2,text:'What is "instantiation" in OOP?',opts:['Deleting an object from memory when no longer needed','Creating an actual object in memory from a class blueprint','Inheriting properties from a parent class','Testing whether two objects have the same property values'],ans:1,exp:'Instantiation is the process of creating a specific object from a class. Example: movie1 = new Movie("Lion King", 1994) creates one Movie object (instance). The class Movie is the blueprint; movie1 is the actual object in memory.'},
{id:49,topic:'OOP',unit:'4.4',lvl:'SL',marks:2,text:'What is encapsulation in OOP?',opts:['Creating a new class that inherits from an existing parent class','Bundling data (attributes) and methods together in a class, restricting direct external access to internal details','Allowing the same method name to have different behaviour in different classes','Simplifying complex systems by hiding unnecessary implementation detail'],ans:1,exp:'Encapsulation bundles related data and methods inside a class, and typically hides internal data using access modifiers (private). External code interacts with objects through defined methods (public interface). This protects data integrity and reduces dependencies.'},
{id:50,topic:'OOP',unit:'4.4',lvl:'SL',marks:2,text:'What is inheritance in OOP?',opts:['Bundling data and methods together inside a class','A child class acquiring the properties and methods of a parent class, enabling code reuse','Allowing multiple classes to share the same method name with different implementations','Breaking a problem into smaller, manageable pieces'],ans:1,exp:'Inheritance allows a child class (subclass) to inherit properties and methods from a parent class (superclass). Example: Movie and MusicAlbum can both inherit from MediaItem, gaining shared attributes like title and year without duplicating code.'},
{id:51,topic:'OOP',unit:'4.4',lvl:'HL',marks:4,text:'What is polymorphism in OOP?',opts:['Allowing a class to inherit from multiple parent classes simultaneously','Allowing different classes to be treated as instances of the same parent class, with each class implementing shared methods differently','Preventing any external code from accessing the internal data of an object','Creating objects that can change their type at runtime'],ans:1,exp:'Polymorphism allows objects of different classes to be treated through a common interface. Example: both Dog and Cat inherit from Animal. Both have a makeSound() method, but Dog outputs "woof" and Cat outputs "meow". The caller uses the same interface but gets different behaviour.'},
{id:52,topic:'OOP',unit:'4.4',lvl:'SL',marks:2,text:'Which of these is an ADVANTAGE of using OOP?',opts:['OOP programs always run faster than procedural programs','Code reuse through inheritance reduces duplication, and encapsulation makes maintenance easier','OOP has a simpler learning curve than procedural programming','OOP programs are always shorter than equivalent procedural programs'],ans:1,exp:'OOP advantages: reusability (inheritance reuses existing code), maintainability (encapsulation isolates changes), scalability (add new classes without redesigning), data hiding (access control). Disadvantages: steeper learning curve, can lead to over-engineering.'},
// ===== DATA MANAGEMENT =====
{id:53,topic:'Data Management',unit:'3.3',lvl:'SL',marks:2,text:'Which of the following is a common cause of data loss?',opts:['Using too many browser tabs simultaneously','Hardware failure (e.g. hard drive crash or power surge)','Installing too many software applications','Using a wired rather than wireless connection'],ans:1,exp:'Common causes of data loss: hardware failure (43% of cases), human error (accidental deletion, ~30%), software corruption, malware/cyberattacks, theft, and natural disasters (fire, flood). Hardware failure is the most common single cause.'},
{id:54,topic:'Data Management',unit:'3.3',lvl:'SL',marks:2,text:'How does offsite backup protect against data loss?',opts:['It compresses data to make it smaller and harder to lose','Data is stored at a remote location away from the main site, so local disasters (fire, flood, theft) cannot destroy both copies','It encrypts data so that even if lost, it cannot be misused','It creates multiple copies of the same file on the same hard drive for speed'],ans:1,exp:'Offsite backup stores copies of data at a geographically separate location. If the main building is destroyed by fire, flooded, or burglarised, the offsite copy remains safe and can be used to restore operations. Cloud backup is a common form of offsite backup.'},
// ===== SYSTEM IMPLEMENTATION =====
{id:55,topic:'System Implementation',unit:'3.3',lvl:'SL',marks:2,text:'What is an advantage of phased changeover when implementing a new system?',opts:['It is the fastest method to fully implement the new system','Lower risk — the system is introduced gradually, allowing problems to be identified and fixed before full deployment','It is always the cheapest implementation method','It requires no staff training during the transition period'],ans:1,exp:'Phased changeover introduces the new system step-by-step, one module or department at a time. If problems arise, only a small part of operations is affected — much lower risk than switching everything at once. Disadvantage: slower and more expensive (partial old and new systems running together).'},
{id:56,topic:'System Implementation',unit:'3.3',lvl:'HL',marks:4,text:'When would direct changeover be preferred over phased changeover?',opts:['Always, because it is safer and more reliable','For smaller, less critical systems where speed and cost matter more than the risk of full failure','For large hospitals and banks where data must never be interrupted','When staff resistance to the new system is very high'],ans:1,exp:'Direct changeover (big bang): old system OFF, new system ON immediately. Advantages: fast, no duplication of systems, cheaper. Disadvantages: very high risk — if the new system fails, all operations stop with no fallback. Suitable for small, non-critical systems or where downtime is very cheap.'},
{id:57,topic:'System Implementation',unit:'3.3',lvl:'SL',marks:2,text:'What is User Acceptance Testing (UAT)?',opts:['Testing performed by the development team to check code syntax errors','Testing done by actual end users to verify the system works in real-world scenarios before going live','Automated testing that runs without human involvement','Performance testing to measure system speed under heavy load'],ans:1,exp:'UAT is the final phase of software testing, performed by real end users or clients. It tests whether the system meets business requirements in realistic scenarios. If UAT passes, the system is signed off as ready for deployment.'},
{id:58,topic:'System Implementation',unit:'3.3',lvl:'SL',marks:2,text:'Which is a consequence of inadequate software testing before deployment?',opts:['The software will run slightly slower on older hardware','Security vulnerabilities may go undetected, exposing user data to attackers','The software will consume more disk space than necessary','Users will need to update the software more frequently'],ans:1,exp:'Consequences of inadequate testing: system crashes, data corruption, security vulnerabilities (undetected attack vectors), financial loss from fixing post-deployment bugs, and reputational damage. Testing is far cheaper before deployment than after.'},
{id:59,topic:'System Implementation',unit:'3.3',lvl:'SL',marks:2,text:'When introducing a new computer system in an organisation, what is a common organisational issue?',opts:['The system will always be incompatible with existing hardware','Staff training requirements — employees must learn the new system, which takes time and money','Data will automatically be deleted during system migration','The system will be slower than the one it replaces'],ans:1,exp:'Common organisational issues: staff training costs and time, resistance to change (employees prefer familiar systems or fear job loss), cost of implementation (hardware/software/downtime), and disruption to normal business operations during transition.'},
// ===== SOCIAL & ETHICAL =====
{id:60,topic:'Social & Ethical',unit:'3.7',lvl:'SL',marks:2,text:'What is a social issue arising from the increased automation of work by computer systems?',opts:['Computer systems always make businesses more profitable','Job displacement — automation can replace human workers, leading to unemployment and need for retraining','Computer systems always create more jobs than they eliminate','Automation reduces the need for electricity in workplaces'],ans:1,exp:'Automation displaces workers, particularly in routine and manual jobs. This causes unemployment, requires workforce retraining, and can widen economic inequality. It raises questions about who benefits from automation and who bears the costs.'},
{id:61,topic:'Social & Ethical',unit:'3.7',lvl:'SL',marks:2,text:'Which is an ethical issue associated with the introduction of new IT systems in organisations?',opts:['The system might run slower on certain computers','Data privacy — personal user data may be collected, stored, and potentially misused','The system may be incompatible with older file formats','Staff may prefer to use the old system initially'],ans:1,exp:'Ethical issues include: data privacy (who has access to personal data?), data misuse, surveillance concerns, algorithmic bias, and responsible use of user information. Organisations have ethical (and legal) obligations to protect personal data.'},
{id:62,topic:'Social & Ethical',unit:'3.7',lvl:'HL',marks:4,text:'What is the "digital divide" and why is it an important social concern?',opts:['The gap in performance between old and new computer hardware','The unequal access to technology and digital skills between different groups (rich/poor, urban/rural, young/old), creating social and economic disadvantage','The difference in data speeds between wired and wireless connections','The incompatibility between different operating systems'],ans:1,exp:'The digital divide refers to the gap between those who have access to digital technology and internet, and those who do not. Groups with less access are disadvantaged in education, employment, and civic participation. This gap exists between countries and within them (urban vs rural, wealthy vs poor).'},
// ===== SaaS & Cloud =====
{id:63,topic:'SaaS & Cloud',unit:'3.4',lvl:'SL',marks:2,text:'What is Software as a Service (SaaS)?',opts:['Software that is permanently installed on a local hard drive and does not require internet','Software delivered and accessed via the internet/cloud, not installed locally — typically through a subscription','Software that can only be used on a single specific device','Software that is free and open-source for anyone to modify'],ans:1,exp:'SaaS delivers software via the internet. The program runs on remote servers; users access it through a browser or thin client. Examples: Google Docs, Microsoft 365, Spotify, Salesforce. No local installation needed — updates happen automatically on the server.'},
{id:64,topic:'SaaS & Cloud',unit:'3.4',lvl:'SL',marks:2,text:'What is a disadvantage of SaaS compared to traditionally installed software?',opts:['SaaS is always more expensive upfront','SaaS requires a reliable internet connection — without it, the software cannot be used','SaaS can never be updated or improved after release','SaaS software is always slower than locally installed equivalents'],ans:1,exp:'SaaS depends on internet connectivity. In areas with poor or no internet access, the software becomes unavailable. Other SaaS drawbacks: ongoing subscription costs, reduced control over your data (stored on provider servers), and dependency on the provider for security and uptime.'},
{id:65,topic:'SaaS & Cloud',unit:'3.4',lvl:'SL',marks:2,text:'Which is an advantage of SaaS over locally installed software?',opts:['SaaS always works offline without any internet connection','Software updates are handled automatically by the provider without user intervention','SaaS gives users complete control over their data security','SaaS is permanently owned after a one-time purchase'],ans:1,exp:'SaaS advantages: automatic updates (no manual patching), accessible from any device with a browser, lower upfront cost, easier deployment, and suitable for low-storage devices. The provider manages infrastructure and maintenance.'},
// ===== PARALLEL COMPUTING =====
{id:66,topic:'Parallel Computing',unit:'2.1',lvl:'HL',marks:4,text:'What is parallel computing?',opts:['Running one program at a time on a very fast single processor','Multiple processors or computers simultaneously solving different parts of a large problem, increasing speed and efficiency','Using two monitors connected to the same computer to display different content','Storing the same data on multiple hard drives simultaneously'],ans:1,exp:'Parallel computing breaks a large problem into sub-tasks that run simultaneously on multiple processing units (CPU cores, GPUs, or networked computers). This dramatically reduces computation time. Used in climate modelling, AI training, simulations, and data analysis.'},
{id:67,topic:'Parallel Computing',unit:'2.1',lvl:'SL',marks:2,text:'What is the difference between shared memory and distributed memory in parallel computing?',opts:['Shared memory is faster; distributed memory is cheaper to purchase','Shared memory: multiple processors access one common memory space. Distributed memory: each processor has its own local memory, communicating via a network','Shared memory is only for GPUs; distributed memory is only for CPUs','Distributed memory stores permanent data; shared memory stores temporary data'],ans:1,exp:'Shared memory (e.g. multi-core CPU): all cores access common RAM — fast but doesn\'t scale to thousands of processors. Distributed memory (e.g. computer cluster): each node has private memory and communicates via network messages — scales massively but requires careful programming.'},
// ===== ABSTRACTION & ALGORITHMS =====
{id:68,topic:'Abstraction',unit:'4.1',lvl:'SL',marks:2,text:'Why is abstraction required in the design of algorithms?',opts:['Abstraction makes algorithms run faster on all hardware','Abstraction reduces complexity by hiding unnecessary detail, allowing focus on essential logic — making algorithms easier to design, understand, and maintain','Abstraction forces programmers to use a specific programming language','Abstraction automatically converts high-level code into machine code'],ans:1,exp:'Abstraction strips away irrelevant implementation details to expose only what matters for the problem at hand. This reduces cognitive overload, improves clarity, supports modular design (reusable functions), and allows programmers to focus on WHAT an algorithm does rather than HOW every detail is implemented.'},
{id:69,topic:'Abstraction',unit:'4.1',lvl:'HL',marks:4,text:'Which best demonstrates the benefit of abstraction in programming?',opts:['Writing all code as a single long block with no functions','Using a function calculateTotal(items) instead of repeating the calculation code everywhere it is needed','Naming all variables as single letters (a, b, c) to keep code short','Removing all comments from code so other programmers cannot understand it'],ans:1,exp:'Abstraction through functions (like calculateTotal) lets you call complex logic with a simple name without knowing the internal implementation. If the calculation changes, you update one function — not everywhere it was used. This is reusability and separation of concerns.'},
// ===== PROTOCOLS & NETWORKS =====
{id:70,topic:'Protocols & Networks',unit:'3.1',lvl:'SL',marks:2,text:'Why are communication protocols necessary in networking?',opts:['They make networks faster by compressing all data automatically','They establish standard rules so that different devices and systems from different manufacturers can communicate correctly with each other','They encrypt all data transmitted between devices automatically','They assign IP addresses to all devices on a network'],ans:1,exp:'Protocols are agreed-upon rules for communication. Without them, a Windows PC, an Apple iPhone, and a Linux server couldn\'t exchange data. Protocols define data format, error checking, flow control, and connection establishment so any conforming device can communicate.'},
{id:71,topic:'Protocols & Networks',unit:'3.1',lvl:'SL',marks:2,text:'What is the function of a router in a network?',opts:['Connects individual devices to a local network using physical cables','Connects different networks together (e.g. home network to internet) and directs data packets along the best path to their destination','Provides wireless signal strength throughout a building','Assigns MAC addresses to devices connecting to a network'],ans:1,exp:'A router operates at the network layer and uses IP addresses to connect different networks and route data packets. It decides the best path for each packet. A switch connects devices within the same network; a router connects different networks.'},
{id:72,topic:'Protocols & Networks',unit:'3.1',lvl:'SL',marks:2,text:'What is the function of a NIC (Network Interface Card)?',opts:['Increases the processor speed for network-intensive applications','Connects a device to a network, handling the physical and data-link communication — each NIC has a unique MAC address','Controls which websites users on a network are allowed to visit','Stores frequently accessed websites to speed up browsing'],ans:1,exp:'A NIC is hardware that provides a device\'s physical connection to a network (wired or wireless). It handles low-level communication protocols and is identified by its unique MAC (Media Access Control) address. Every networked device has a NIC.'},
{id:73,topic:'Protocols & Networks',unit:'3.1',lvl:'SL',marks:2,text:'What is data encryption in the context of network security?',opts:['Physically destroying data so it cannot be recovered','Converting data into a coded/scrambled form using an algorithm and key so only authorised parties can read it','Creating a backup copy of data to protect against hardware failure','Blocking specific websites from being accessed on a network'],ans:1,exp:'Network encryption scrambles data before transmission so that even if intercepted, it cannot be read without the decryption key. HTTPS uses TLS encryption. Without encryption, data transmitted over networks (including passwords) can be captured and read in plaintext.'},
// ===== TRACE TABLES =====
{id:74,topic:'Trace Tables',unit:'4.1',lvl:'SL',marks:2,text:'What is the purpose of a trace table?',opts:['To draw a visual diagram of how data flows through a program','To manually track the value of each variable step-by-step as an algorithm executes, helping identify logic errors','To measure how fast a program runs on different hardware','To automatically generate test cases for a program'],ans:1,exp:'A trace table (dry run) records the value of every variable after each line executes, allowing you to follow the program\'s logic by hand. This reveals logic errors — cases where the algorithm produces wrong values — without running the code on a computer.'},
{id:75,topic:'Trace Tables',unit:'4.1',lvl:'SL',marks:4,text:'Trace this algorithm:\n\nK = 1, N = 1, M = 2\nwhile K < 5\n  output(N, M)\n  K = K + 1\n  N = N + 2\n  M = M * 2\nend loop\n\nWhat is the LAST value output before the loop ends?',opts:['(5, 8)','(7, 16)','(9, 32)','(3, 4)'],ans:1,exp:'Trace: K=1→(1,2)→K=2,N=3,M=4; K=2→(3,4)→K=3,N=5,M=8; K=3→(5,8)→K=4,N=7,M=16; K=4→(7,16)→K=5,N=9,M=32. K=5 fails K<5, loop ends. Last output: (7,16).'},
{id:76,topic:'Trace Tables',unit:'4.1',lvl:'SL',marks:2,text:'In a trace table for a loop, when should you record the output — before or after updating variables?',opts:['Always after all variable updates complete in that iteration','Output should be recorded at the exact point it occurs in the code — which may be before variable updates in that iteration','Output is always recorded at the very start of each iteration','Output is recorded at the end of the entire loop, not per iteration'],ans:1,exp:'This is a critical exam mistake. Record output exactly when the output statement appears in the code. If the algorithm says output THEN K=K+1, record the output with the CURRENT value of K, not the updated one. The trace table follows code execution order precisely.'},
// ===== MORE QUESTIONS for variety =====
{id:77,topic:'Networking',unit:'3.1',lvl:'SL',marks:2,text:'Which of the following protocols is used for sending emails?',opts:['HTTP','FTP','SMTP','DNS'],ans:2,exp:'SMTP (Simple Mail Transfer Protocol) is used to send emails between mail servers and from email clients to servers. HTTP is for web pages. FTP transfers files. DNS translates domain names. POP3 and IMAP are used to receive emails.'},
{id:78,topic:'OOP',unit:'4.4',lvl:'HL',marks:4,text:'What is abstraction in the context of OOP (as distinct from abstraction in algorithms)?',opts:['A type of loop specific to object-oriented languages','Hiding complex implementation details inside a class and exposing only a simple public interface — the user of a class needs to know WHAT it does, not HOW','Creating a copy of an existing class with slightly different properties','Storing the same method in multiple classes simultaneously'],ans:1,exp:'OOP abstraction means hiding internal complexity. When you call car.start(), you don\'t need to know about fuel injection, ignition timing, etc. The class hides all that complexity behind a simple method. Users interact with a clean, simple interface while complexity is hidden inside.'},
{id:79,topic:'Data Management',unit:'3.3',lvl:'SL',marks:2,text:'What does "3-2-1 backup strategy" mean?',opts:['Keep 3 users with admin access, 2 with read-only, 1 with no access','Keep 3 copies of data, on 2 different storage types, with 1 copy stored offsite','Back up data every 3 days on 2 systems, with 1 manual check','Use 3 different encryption keys, 2 servers, 1 cloud provider'],ans:1,exp:'The 3-2-1 rule: maintain 3 copies of data (original + 2 backups), stored on 2 different media types (e.g. external drive + cloud), with 1 copy offsite. This protects against hardware failure, software corruption, and local disasters simultaneously.'},
{id:80,topic:'Computer Architecture',unit:'2.1',lvl:'SL',marks:2,text:'Why is cache memory faster than RAM?',opts:['Cache uses a different operating system to manage data','Cache is physically closer to (or inside) the CPU and uses faster (but more expensive) SRAM technology','Cache has a larger storage capacity than RAM','Cache does not need to be refreshed periodically like RAM does'],ans:1,exp:'Cache speed advantages: (1) physically located inside or directly adjacent to the CPU chip — data travels a shorter distance. (2) Uses SRAM (Static RAM) which doesn\'t need constant refreshing, unlike DRAM (Dynamic RAM) used in main memory. Trade-off: SRAM is far more expensive per byte, so cache is small (KB–MB) vs RAM (GB).'},
];

// ============================================================
// TOPIC METADATA — 21 topics (13 live + 8 coming soon)
// ============================================================
const TMETA=[
  {name:'Networking',unit:'3.1–3.2',icon:'🌐',ok:true},
  {name:'Programming',unit:'4.1–4.3',icon:'💻',ok:true},
  {name:'Security',unit:'3.5',icon:'🔒',ok:true},
  {name:'Systems',unit:'3.3',icon:'⚙️',ok:true},
  {name:'Data',unit:'2.1',icon:'🔢',ok:true},
  {name:'Computer Architecture',unit:'2.1',icon:'🖥️',ok:true},
  {name:'OOP',unit:'4.4',icon:'🏗️',ok:true},
  {name:'Data Management',unit:'3.3',icon:'💾',ok:true},
  {name:'System Implementation',unit:'3.3',icon:'🔄',ok:true},
  {name:'Social & Ethical',unit:'3.7',icon:'⚖️',ok:true},
  {name:'SaaS & Cloud',unit:'3.4',icon:'☁️',ok:true},
  {name:'Parallel Computing',unit:'2.1',icon:'⚡',ok:true},
  {name:'Abstraction',unit:'4.1',icon:'🧩',ok:true},
  {name:'Protocols & Networks',unit:'3.1',icon:'📡',ok:true},
  {name:'Trace Tables',unit:'4.1',icon:'📋',ok:true},
  {name:'Databases',unit:'3.4',icon:'🗄️',ok:false},
  {name:'Abstract Data Types',unit:'5.1',icon:'📚',ok:false},
  {name:'Sorting Algorithms',unit:'5.3',icon:'🔤',ok:false},
  {name:'Operating Systems',unit:'3.2',icon:'🖱️',ok:false},
  {name:'Web Development',unit:'3.6',icon:'🕸️',ok:false},
  {name:'AI & Machine Learning',unit:'3.6',icon:'🤖',ok:false},
  {name:'Logic & Boolean',unit:'2.2',icon:'⊕',ok:false},
];

// ============================================================
// CONCEPTS DATA
// ============================================================
const CDATA=[
{id:'dns',topic:'Networking',unit:'3.1',name:'DNS — Domain Name System',desc:'How domain names are translated to IP addresses via a hierarchical server structure.',qs:5,
 c:{tag:'Networking · Unit 3.1',title:'DNS',sum:'DNS is the internet\'s phone book. It translates human-readable domain names into machine-readable IP addresses, so browsers can load websites without users memorising numbers.',
    secs:[
      {h:'What DNS Does',p:'Every device on the internet has a numerical IP address. DNS maintains a distributed database that maps domain names like google.com to those addresses. The translation happens invisibly every time you browse the web.'},
      {h:'The Hierarchy',p:'DNS is tree-structured. Root servers sit at the top (13 clusters globally). Below: TLD servers (.com, .edu, .au). Below those: authoritative servers holding records for individual domains. Each layer handles only its portion.'},
      {h:'The Lookup Process',p:'(1) Browser checks cache → (2) OS checks cache → (3) Local resolver queried → (4) Root server → (5) TLD server → (6) Authoritative server returns IP → (7) Browser connects to that IP.'},
      {h:'Record Types',p:'A: domain → IPv4 address. AAAA: domain → IPv6. CNAME: alias one domain to another. MX: identifies mail servers. NS: identifies authoritative name servers for a domain.'},
    ],tip:'IB exams often ask you to describe the DNS lookup step-by-step. Memorise: local resolver → root → TLD → authoritative. Also explain WHY it is hierarchical: scalability and no single point of failure.'}},
{id:'tcp',topic:'Networking',unit:'3.1',name:'TCP vs UDP',desc:'Two transport protocols with opposing trade-offs between reliability and speed.',qs:4,
 c:{tag:'Networking · Unit 3.1',title:'TCP & UDP',sum:'TCP guarantees reliable ordered delivery. UDP sacrifices reliability for speed. The right choice depends entirely on whether your application prioritises certainty or performance.',
    secs:[
      {h:'TCP',p:'Connection-oriented. Three-way handshake (SYN→SYN-ACK→ACK) before transfer. Numbers every packet. Acknowledgements required. Retransmits lost packets. Ensures ordered delivery. 20-byte header. Uses: HTTPS, FTP, SMTP, SSH.'},
      {h:'UDP',p:'Connectionless. No handshake. No acknowledgements. No guaranteed delivery. No ordering. 8-byte header. Lowest latency. Uses: DNS, live video streaming, online gaming, VoIP.'},
      {h:'When to Use Which',p:'Use TCP when data integrity is critical: financial transactions, file downloads, email — a corrupted file is useless. Use UDP when speed matters more than completeness: a dropped video frame beats a buffering pause, a stale game position beats a frozen screen.'},
    ],tip:'IB loves asking you to JUSTIFY which protocol for a scenario. Always explain the trade-off explicitly. Example: "UDP is preferred because the application requires low latency; a dropped packet causes a brief glitch rather than a pause while TCP retransmits."'}},
{id:'arch',topic:'Computer Architecture',unit:'2.1',name:'CPU, CU & ALU',desc:'The components inside a CPU and how they work together to execute instructions.',qs:5,
 c:{tag:'Computer Architecture · Unit 2.1',title:'CPU Architecture',sum:'The CPU (Central Processing Unit) is the brain of a computer. Inside it, the Control Unit manages instruction flow, the ALU performs calculations, and registers hold temporary data.',
    secs:[
      {h:'The Control Unit (CU)',p:'Manages the entire fetch-decode-execute cycle. Fetches the next instruction from memory, decodes it to determine what operation is needed, then sends control signals to the ALU or memory to execute it. The CU is the manager — it does not do calculations.'},
      {h:'The ALU (Arithmetic Logic Unit)',p:'Performs all mathematical operations (addition, subtraction, multiplication) and logical operations (AND, OR, NOT, comparisons). The CU tells the ALU what to do; the ALU does the actual computation.'},
      {h:'Fetch-Decode-Execute Cycle',code:'// 1. FETCH: CU retrieves instruction from memory address in PC\n// 2. DECODE: CU interprets what operation is required\n// 3. EXECUTE: CU signals ALU or memory to perform operation\n// 4. Cycle repeats for next instruction'},
      {h:'Cache Memory',p:'Very fast memory physically inside or adjacent to the CPU. Stores frequently used data and instructions, reducing the need to fetch from slower RAM. L1 cache (fastest, smallest, inside CPU core), L2, L3 (progressively larger and slightly slower). Uses expensive SRAM technology.'},
    ],tip:'Know the CU vs CPU distinction: the CPU contains the CU, ALU, and registers. The CU manages; the ALU computes. Common exam question: "Describe the role of the CU in executing a program instruction" → fetch, decode, execute.'}},
{id:'cache',topic:'Computer Architecture',unit:'2.1',name:'Cache Memory',desc:'Fast intermediate storage between CPU and RAM — why it exists and how it works.',qs:2,
 c:{tag:'Computer Architecture · Unit 2.1',title:'Cache Memory',sum:'Cache is ultra-fast memory inside or near the CPU that stores recently/frequently used data. It bridges the speed gap between the fast CPU and the slower main memory (RAM).',
    secs:[
      {h:'Why Cache Exists',p:'CPUs can process billions of operations per second. RAM is thousands of times slower. Without cache, the CPU would constantly wait for data. Cache stores the data and instructions the CPU is most likely to need next, minimising these waits.'},
      {h:'Cache Hierarchy',p:'L1 cache: smallest (32–64 KB), fastest, inside each CPU core. L2 cache: medium (256 KB–4 MB), slightly slower. L3 cache: largest (8–32 MB), shared across cores, slower than L1/L2 but faster than RAM. On a cache miss, the CPU falls back to the next level.'},
    ],tip:'Exam answer for "purpose of cache": "Cache stores frequently used instructions and data close to the CPU, reducing the number of slower RAM accesses and therefore improving overall processing speed."'}},
{id:'oop',topic:'OOP',unit:'4.4',name:'OOP — Classes, Objects & Principles',desc:'The four core principles of object-oriented programming and why they matter.',qs:6,
 c:{tag:'OOP · Unit 4.4',title:'Object-Oriented Programming',sum:'OOP organises software around objects — bundles of data and behaviour. Four principles underpin it: encapsulation, abstraction, inheritance, and polymorphism.',
    secs:[
      {h:'Class vs Object',code:'// Class = blueprint (no memory yet)\nclass Movie {\n    String title;\n    int yearReleased;\n    String format; // VHS, DVD, Blu-ray\n    \n    void play() { /* implementation */ }\n}\n\n// Object = instance (actual memory allocated)\nMovie m1 = new Movie("Lion King", 1994, "DVD");\nMovie m2 = new Movie("Inception", 2010, "Blu-ray");'},
      {h:'Encapsulation',p:'Bundling data (attributes) and methods inside a class, and hiding internal data using access modifiers. External code uses the public interface; internal details are private. Protects data from unintended modification.'},
      {h:'Inheritance',code:'// Parent class\nclass MediaItem {\n    String title;\n    int year;\n}\n\n// Child class inherits title and year\nclass Movie extends MediaItem {\n    String director; // Movie-specific\n}'},
      {h:'Polymorphism',p:'Same method name, different behaviour depending on the object type. Example: animal.makeSound() calls dog.makeSound() → "woof" and cat.makeSound() → "meow". The caller uses a unified interface; each class implements it differently.'},
      {h:'Abstraction',p:'Hiding implementation complexity behind a simple interface. car.start() hides fuel injection, ignition timing, sensor checks. The caller knows what the method does, not how.'},
    ],tip:'IB often asks: "Explain the difference between a class and an object." One-sentence answer: a class is the blueprint; an object is one specific instance created from that blueprint in memory. Also know all four OOP principles by name, with a brief definition and example of each.'}},
{id:'datamgmt',topic:'Data Management',unit:'3.3',name:'Data Loss & Backup',desc:'Common causes of data loss and strategies to prevent it.',qs:3,
 c:{tag:'Data Management · Unit 3.3',title:'Data Loss & Backup',sum:'Data loss is one of the most costly IT events organisations face. Understanding causes and countermeasures is essential for any system designer.',
    secs:[
      {h:'Causes of Data Loss',p:'Hardware failure (most common ~43%): drive crashes, power surges. Human error (~30%): accidental deletion, formatting mistakes. Software corruption: bugs causing file damage. Cyberattacks: ransomware encrypts files, phishing steals credentials. Theft: devices stolen. Natural disasters: fire, flood permanently destroy physical media.'},
      {h:'Offsite Backup',p:'Storing backup copies at a physically separate location. If the main site is destroyed (fire, flood), the offsite copy is unaffected. Cloud backup (e.g. AWS S3, Google Cloud Storage) is a modern form of offsite backup with automatic, continuous syncing.'},
      {h:'3-2-1 Rule',p:'Best practice backup strategy: maintain 3 copies of data, on 2 different media types (e.g. local drive + cloud), with 1 copy stored offsite. This defends against hardware failure, software corruption, and local physical disaster simultaneously.'},
    ],tip:'IB question: "Explain how offsite storage can prevent data loss" → answer: data is backed up to a remote location away from the main site; if local hardware fails or building is damaged, data can be restored from the offsite backup.'}},
{id:'sysimpl',topic:'System Implementation',unit:'3.3',name:'Changeover & Testing',desc:'Methods for switching to a new system and the importance of thorough testing.',qs:5,
 c:{tag:'System Implementation · Unit 3.3',title:'Changeover Methods & Testing',sum:'Deploying a new system carries risk. Choosing the right changeover method and testing strategy determines whether the transition succeeds or causes catastrophic failure.',
    secs:[
      {h:'Phased Changeover',p:'Introduces the new system gradually — one module, department, or user group at a time. Advantages: lower risk, problems identified early, staff adjust gradually. Disadvantages: slower, more expensive (old and new systems running simultaneously), complex to manage hybrid state.'},
      {h:'Direct Changeover (Big Bang)',p:'Old system off, new system on immediately. Advantages: fast, cheap (no duplication), immediate full transition. Disadvantages: very high risk — if the new system fails there is no fallback and all operations stop. Suitable for small, non-critical systems.'},
      {h:'User Acceptance Testing (UAT)',p:'Final testing phase performed by real end users before go-live. Tests real-world scenarios, usability, and whether the system meets business requirements. If UAT passes, stakeholders sign off the system as production-ready.'},
      {h:'Consequences of Inadequate Testing',p:'System crashes and downtime, data corruption and incorrect outputs, security vulnerabilities left unpatched, financial loss from post-deployment bug fixes, and reputational damage leading to loss of user trust.'},
    ],tip:'"Evaluate phased vs direct changeover" is a frequent IB question. Structure your answer: pros, cons, comparison, judgment. Conclusion: "Phased is safer for large/critical systems; direct is faster and cheaper for small/non-critical ones."'}},
{id:'soceth',topic:'Social & Ethical',unit:'3.7',name:'Social & Ethical Issues',desc:'The social, ethical, and health impacts of computing on individuals and society.',qs:3,
 c:{tag:'Social & Ethical · Unit 3.7',title:'Social & Ethical Issues',sum:'Computing systems create enormous benefits but also raise serious social, ethical, health, and legal concerns that every IB CS student must be able to evaluate.',
    secs:[
      {h:'Social Issues',p:'Job displacement: automation replaces routine tasks, causing unemployment and requiring workforce retraining. Digital divide: unequal access to technology creates educational and economic disadvantage between rich/poor, urban/rural. Dependency on technology: over-reliance reduces resilience.'},
      {h:'Ethical Issues',p:'Data privacy: personal data collected without full consent or used beyond its stated purpose. Surveillance: tracking individuals via devices, cameras, metadata. Algorithmic bias: automated systems can embed and amplify human prejudice. Intellectual property: copyright, piracy, plagiarism.'},
      {h:'Health Issues',p:'Eye strain from prolonged screen use. RSI (Repetitive Strain Injury) from keyboard/mouse use. Sedentary lifestyle contributing to obesity and cardiovascular issues. Mental health impacts: social media comparison, cyberbullying, addiction to devices.'},
    ],tip:'"Describe TWO social/ethical issues arising from a new technology" is a standard IB question. Always: name the issue → explain what causes it → give a specific example. Vague answers do not get marks.'}},
{id:'saas',topic:'SaaS & Cloud',unit:'3.4',name:'SaaS & Cloud Computing',desc:'Software delivery via the internet — advantages, limitations, and use cases.',qs:3,
 c:{tag:'SaaS & Cloud · Unit 3.4',title:'SaaS & Cloud Computing',sum:'Cloud computing delivers software and infrastructure via the internet. SaaS (Software as a Service) is the most consumer-visible layer — software you access through a browser without installing anything locally.',
    secs:[
      {h:'What is SaaS?',p:'Software hosted on remote servers, accessed via browser or thin client. No local installation. Provider manages hardware, maintenance, and updates. Examples: Google Docs, Microsoft 365 online, Spotify, Salesforce, Dropbox.'},
      {h:'Advantages',p:'No installation required — instant access from any device. Automatic updates: provider pushes improvements without user action. Lower upfront cost: subscription model vs. large one-time license. Accessible on low-storage devices. Easy to scale up/down.'},
      {h:'Disadvantages',p:'Requires reliable internet — offline areas cannot use the software. Long-term subscription costs can exceed one-time purchase. Reduced control: user cannot choose update timing. Data stored on provider servers — raises privacy and security concerns. Provider lock-in risk.'},
    ],tip:'"Evaluate SaaS" requires both pros and cons with a concluding judgment. Key contrast: SaaS is ideal for organisations wanting low upfront cost and easy management, but unsuitable in low-connectivity environments or where data sovereignty is critical.'}},
{id:'parallel',topic:'Parallel Computing',unit:'2.1',name:'Parallel Computing',desc:'Using multiple processors simultaneously to solve large problems faster.',qs:2,
 c:{tag:'Parallel Computing · Unit 2.1',title:'Parallel Computing',sum:'Parallel computing dramatically accelerates computation by breaking large problems into parts that run simultaneously on multiple processors — the foundation of modern AI, simulations, and big data.',
    secs:[
      {h:'How It Works',p:'Problem decomposition: the large task is divided into smaller independent sub-tasks. Simultaneous execution: sub-tasks run concurrently on different CPU cores, GPUs, or networked computers. Orchestration: software manages resources and synchronises results.'},
      {h:'Shared vs Distributed Memory',p:'Shared memory: multiple processors access one common RAM space — fast communication, doesn\'t scale beyond ~hundreds of cores. Distributed memory: each processor has private memory, communicates via network messages — scales to thousands of nodes (supercomputers, server clusters).'},
      {h:'Applications',p:'AI/ML training (GPUs run thousands of parallel operations), climate modelling, genomics research, rendering CGI, financial simulations, web server request handling.'},
    ],tip:'IB question: "Describe parallel computing and explain an advantage." Answer: multiple processors solve sub-tasks simultaneously → reduces total computation time → enables problems too large for a single processor (e.g. training AI models, simulating climate systems).'}},
{id:'abstraction',topic:'Abstraction',unit:'4.1',name:'Abstraction in Algorithms',desc:'Why hiding unnecessary detail is essential to designing good algorithms.',qs:2,
 c:{tag:'Abstraction · Unit 4.1',title:'Abstraction',sum:'Abstraction is removing unnecessary detail to focus on what matters. It is not simplification for its own sake — it is the deliberate choice of which details to hide and which to expose.',
    secs:[
      {h:'Why Abstraction is Required',p:'Real-world problems are complex. Abstraction manages this complexity by: hiding implementation details behind clean interfaces, reducing cognitive load on the programmer, enabling modular design (reusable functions/classes), and allowing independent development of components.'},
      {h:'Without vs With Abstraction',code:'// WITHOUT abstraction — repeated logic everywhere:\ntotal = 0;\nfor (int i = 0; i < items.length; i++) {\n    total += items[i].price * (1 + taxRate);\n}\n\n// WITH abstraction — clean, reusable:\ntotal = calculateTotal(items, taxRate);'},
      {h:'Levels of Abstraction',p:'High-level: problem described in human terms ("find the shortest route"). Medium-level: algorithm described as pseudocode steps. Low-level: actual code. Machine level: binary instructions. Each level hides the complexity of the level below.'},
    ],tip:'"Explain why abstraction is required in algorithm design" → IB top-mark answer: "Abstraction allows developers to reduce complexity by hiding unnecessary detail, making algorithms easier to design, understand, test, and maintain, and supporting the creation of reusable modular components."'}},
{id:'protocols',topic:'Protocols & Networks',unit:'3.1',name:'Protocols, Routers & NICs',desc:'Why protocols exist, what routers do, and the role of NICs in networking.',qs:4,
 c:{tag:'Protocols & Networks · Unit 3.1',title:'Protocols, Routers & NICs',sum:'Networks only work because every device follows agreed-upon rules. Protocols define those rules; routers connect different networks; NICs connect individual devices to networks.',
    secs:[
      {h:'Why Protocols Are Necessary',p:'Without protocols, a Samsung phone, an Apple laptop, and a Windows server couldn\'t exchange a single byte. Protocols standardise: data format and encoding, error detection and correction, connection establishment and termination, flow control to prevent flooding receivers.'},
      {h:'Router',p:'Operates at the network layer (Layer 3). Connects different networks (e.g. your home network to the internet). Uses IP addresses to route packets along the optimal path. Decision-making device — if a packet can take multiple routes, the router chooses based on routing tables.'},
      {h:'NIC (Network Interface Card)',p:'Hardware that physically connects a device to a network (wired via Ethernet, wireless via WiFi). Each NIC has a unique MAC address burned in at manufacture. Operates at layers 1–2. Every networked device — phone, laptop, printer, server — has a NIC.'},
      {h:'Encryption in Networks',p:'Data transmitted unencrypted can be intercepted and read. HTTPS uses TLS (Transport Layer Security) to encrypt HTTP traffic. Encryption converts plaintext to ciphertext — unreadable without the decryption key. VPNs add an additional encrypted tunnel over the network.'},
    ],tip:'Router vs Switch vs NIC: Router connects different networks (uses IP). Switch connects devices within the same network (uses MAC). NIC is the hardware in a device that provides network connectivity. IB commonly confuses router and switch.'}},
{id:'trace',topic:'Trace Tables',unit:'4.1',name:'Trace Tables',desc:'How to manually track variables through an algorithm to verify correct behaviour.',qs:3,
 c:{tag:'Trace Tables · Unit 4.1',title:'Trace Tables',sum:'Trace tables are the IB CS examiner\'s favourite debugging tool. Master them and you can score full marks on algorithm questions even without running code.',
    secs:[
      {h:'What is a Trace Table?',p:'A manual debugging technique: you create a table with one column per variable (plus an output column), then execute the algorithm line-by-line, recording each variable\'s value whenever it changes. Also called a "dry run."'},
      {h:'Trace Table Example',code:'// Algorithm:\n// K=1, N=1, M=2\n// while K < 5\n//   output(N, M)  ← record output HERE\n//   K = K + 1     ← then update K\n//   N = N + 2     ← then N\n//   M = M * 2     ← then M\n\n// Iteration 1: output(1,2) → K=2, N=3, M=4\n// Iteration 2: output(3,4) → K=3, N=5, M=8\n// Iteration 3: output(5,8) → K=4, N=7, M=16\n// Iteration 4: output(7,16)→ K=5 → STOP'},
      {h:'Common Mistakes to Avoid',p:'Recording output AFTER variable updates instead of at the exact point in code. Forgetting the final iteration before the loop condition fails. Not checking the loop condition before each iteration. Missing a variable update.'},
    ],tip:'"Write values BEFORE the update, not after" — the most common exam mistake. Record output exactly when the output statement appears. Update variables in the exact order they appear in the algorithm. Always check the loop condition before assuming another iteration occurs.'}},
];

// ============================================================
// STATE
// ============================================================
let S={
  streak:+localStorage.getItem('lp_streak')||0,
  last:localStorage.getItem('lp_last')||'',
  practiceAns:JSON.parse(localStorage.getItem('lp_practiceAns')||'{}'), // dashboard
  allAns:JSON.parse(localStorage.getItem('lp_allAns')||'{}'), // for review
  prac:{topic:'All',lvl:'all',mode:'normal',qi:0,qs:[]},
  exam:{qs:[],qi:0,answers:{},iv:null,secs:1800,paused:false,noLimit:false,lastSettings:{count:20,hrs:0,mins:30}},
};
function save(){
  localStorage.setItem('lp_streak',S.streak);
  localStorage.setItem('lp_last',S.last);
  localStorage.setItem('lp_practiceAns',JSON.stringify(S.practiceAns));
  localStorage.setItem('lp_allAns',JSON.stringify(S.allAns));
}

// STREAK
function checkStreak(){
  const today=new Date().toDateString(),yest=new Date(Date.now()-86400000).toDateString();
  if(S.last===today)return;
  if(S.last===yest)S.streak++;
  else S.streak=1;
  S.last=today;save();
  document.getElementById('sc').textContent=S.streak;
}

// NAV
function go(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
  document.getElementById('p-'+name).classList.add('active');
  const order=['home','practice','concepts','dashboard','exam'];
  const i=order.indexOf(name);
  if(i>=0)document.querySelectorAll('.nav-link')[i].classList.add('active');
  if(name==='dashboard')renderDash();
  if(name==='concepts'){showCList();renderCGrid();}
  if(name==='home')renderHomeStats();
  window.scrollTo(0,0);
}

// HOME STATS
function renderHomeStats(){
  const el=document.getElementById('home-stats');
  const totalQ=QS.length;
  const totalTopics=TMETA.filter(t=>t.ok).length;
  const practiceCount=Object.keys(S.practiceAns).length;
  el.innerHTML=`
    <div class="hs-cell"><div class="hs-val">${totalQ}+</div><div class="hs-lbl">questions</div></div>
    <div class="hs-cell"><div class="hs-val">${totalTopics}</div><div class="hs-lbl">live topics</div></div>
    <div class="hs-cell"><div class="hs-val">${practiceCount}</div><div class="hs-lbl">you've answered</div></div>`;
}

// TOPICS GRID
function renderTGrid(){
  const el=document.getElementById('tgrid');el.innerHTML='';
  TMETA.forEach(t=>{
    const cnt=QS.filter(q=>q.topic===t.name).length;
    const d=document.createElement('div');
    d.className='topic-tile '+(t.ok?'avail':'soon');
    d.innerHTML=`<div class="tile-icon">${t.icon}</div><div class="tile-name">${t.name}</div><div class="tile-count">${t.ok?cnt+' questions':'Unit '+t.unit}</div><div><span class="badge ${t.ok?'b-live':'b-soon'}">${t.ok?'LIVE':'SOON'}</span></div>`;
    if(t.ok)d.onclick=()=>{setTopic(t.name);go('practice');};
    el.appendChild(d);
  });
}

// PRACTICE
function renderTFilters(){
  const el=document.getElementById('tfilters');el.innerHTML='';
  const mk=(label,topic,isFirst)=>{
    const b=document.createElement('button');
    b.className='fbtn'+(isFirst?' active':'');
    b.dataset.topic=topic;
    b.innerHTML=`<span class="fdot"></span>${label}`;
    b.onclick=function(){
      el.querySelectorAll('.fbtn').forEach(x=>x.classList.remove('active'));
      this.classList.add('active');
      setTopic(topic);
    };
    el.appendChild(b);
  };
  mk('All topics','All',true);
  TMETA.filter(t=>t.ok).forEach(t=>mk(t.name,t.name,false));
}

function setLvl(l,btn){
  document.querySelectorAll('#lvl-group .fbtn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  S.prac.lvl=l;buildPS();renderP();
}
function setMode(m,btn){
  document.querySelectorAll('#mode-group .fbtn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  S.prac.mode=m;buildPS();renderP();
}
function setTopic(t){S.prac.topic=t;S.prac.qi=0;buildPS();renderP();}
function buildPS(){
  let qs=[...QS];
  if(S.prac.topic!=='All')qs=qs.filter(q=>q.topic===S.prac.topic);
  if(S.prac.lvl!=='all')qs=qs.filter(q=>q.lvl===S.prac.lvl);
  if(S.prac.mode==='shuffle')qs=qs.sort(()=>Math.random()-.5);
  if(S.prac.mode==='review')qs=qs.filter(q=>S.practiceAns[q.id]&&!S.practiceAns[q.id].correct);
  S.prac.qs=qs;if(S.prac.qi>=qs.length)S.prac.qi=0;
}
function renderP(){
  const{qs,qi,topic}=S.prac;
  document.getElementById('ptitle').textContent=topic==='All'?'All Topics':topic;
  document.getElementById('pmeta').textContent=`${qs.length} questions · ${Object.keys(S.practiceAns).length} answered`;
  document.getElementById('pbar').style.width=(qs.length?Math.round((qi/qs.length)*100):0)+'%';
  const nav=document.getElementById('qnav');nav.innerHTML='';
  qs.slice(0,30).forEach((q,i)=>{
    const b=document.createElement('button');b.className='qnb';b.textContent=i+1;
    const a=S.practiceAns[q.id];
    if(i===qi)b.classList.add('cur');else if(a?.correct)b.classList.add('ok');else if(a&&!a.correct)b.classList.add('err');
    b.onclick=()=>{S.prac.qi=i;renderP();};nav.appendChild(b);
  });
  renderPQ();
}
function renderPQ(){
  const{qs,qi}=S.prac;
  if(!qs.length){document.getElementById('pqa').innerHTML='<div class="empty">No questions match these filters. Try a different topic or level.</div>';return;}
  const q=qs[qi],prev=S.practiceAns[q.id];
  const opts=q.opts.map((o,i)=>{
    let c='q-opt';
    if(prev){if(i===q.ans)c+=' correct';else if(i===prev.chosen&&!prev.correct)c+=' wrong';else c+=' dim';}
    return `<button class="${c}" ${prev?'disabled':''} onclick="ansP(${i},${q.id})">${o}</button>`;
  }).join('');
  document.getElementById('pqa').innerHTML=`
    <div class="q-card">
      <div class="q-hdr"><span class="q-topic-tag">${q.topic} · ${q.unit}</span><span class="q-marks-tag">${q.marks} mark${q.marks>1?'s':''} · ${q.lvl}</span></div>
      <div class="q-body">
        <p class="q-text">${q.text}</p>
        <div class="q-opts">${opts}</div>
        <div class="q-explain ${prev?'show':''}">${prev?q.exp:''}</div>
      </div>
      <div class="q-foot">
        <span class="q-cta">${prev?(prev.correct?'✓ Correct':'✗ Incorrect — review the explanation'):'Choose an answer'}</span>
        <button class="btn-n" ${qi<qs.length-1?'':'disabled'} onclick="nextPQ()">Next →</button>
      </div>
    </div>`;
}
function ansP(chosen,qid){
  const q=QS.find(x=>x.id===qid);
  const correct=chosen===q.ans;
  // Only record in practiceAns (dashboard) if answering for first time
  if(!S.practiceAns[qid]){
    S.practiceAns[qid]={correct,chosen,topic:q.topic};
    S.allAns[qid]={correct,chosen,topic:q.topic};
    save();checkStreak();
  }
  renderPQ();
  // Update nav dots
  document.querySelectorAll('#qnav .qnb').forEach((b,i)=>{
    b.className='qnb';const a=S.practiceAns[S.prac.qs[i]?.id];
    if(i===S.prac.qi)b.classList.add('cur');else if(a?.correct)b.classList.add('ok');else if(a&&!a.correct)b.classList.add('err');
  });
}
function nextPQ(){if(S.prac.qi<S.prac.qs.length-1){S.prac.qi++;renderP();}}

// CONCEPTS
function renderCGrid(filter=''){
  const el=document.getElementById('cgrid');el.innerHTML='';
  const f=filter.toLowerCase();
  const data=CDATA.filter(c=>!f||c.name.toLowerCase().includes(f)||c.desc.toLowerCase().includes(f)||c.topic.toLowerCase().includes(f));
  if(!data.length){el.innerHTML='<div class="empty" style="grid-column:1/-1">No concepts match your search.</div>';return;}
  data.forEach(c=>{
    const card=document.createElement('div');card.className='con-card';
    card.innerHTML=`<div class="con-tag">${c.topic} · Unit ${c.unit}</div><div class="con-name">${c.name}</div><div class="con-desc">${c.desc}</div><div class="con-foot"><span class="con-qs">${c.qs} questions</span><span style="color:var(--muted)">→</span></div>`;
    card.onclick=()=>showCDet(c.id);el.appendChild(card);
  });
}
function filterC(v){renderCGrid(v);}
function showCList(){document.getElementById('clist').style.display='';document.getElementById('cdet').style.display='none';}
function showCDet(id){
  const c=CDATA.find(x=>x.id===id);if(!c)return;
  const d=c.c;
  let sHTML='';
  d.secs.forEach(s=>{
    sHTML+=`<h3>${s.h}</h3>`;
    if(s.code)sHTML+=`<div class="code-block">${fmtCode(s.code)}</div>`;
    else sHTML+=`<p>${s.p}</p>`;
  });
  const rq=QS.filter(q=>q.topic===c.topic).length;
  document.getElementById('cdetcontent').innerHTML=`
    <button class="back-btn" onclick="showCList()">← All Concepts</button>
    <div class="det-eyebrow">${d.tag}</div>
    <h1 class="det-title">${d.title}</h1>
    <p class="det-summary">${d.sum}</p>
    <hr class="div">
    <div class="det-body">${sHTML}
      <div class="tip-box"><div class="tip-lbl">IB Exam Tip</div><div class="tip-text">${d.tip}</div></div>
    </div>
    <hr class="div">
    <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.875rem">
      <div><div style="font-size:15px;color:var(--cream);font-weight:500">Ready to practise?</div><div style="font-size:13px;color:var(--muted)">${rq} questions on ${c.topic}</div></div>
      <button class="btn-p" onclick="setTopic('${c.topic}');go('practice')">Practise ${c.topic} →</button>
    </div>`;
  document.getElementById('clist').style.display='none';document.getElementById('cdet').style.display='';
  window.scrollTo(0,0);
}

// CODE HIGHLIGHTING — multi-colour
function fmtCode(raw){
  const h=raw.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const lines=h.split('\n');
  return lines.map(line=>{
    // Full-line comments first
    const lineTrimed=line.trim();
    if(lineTrimed.startsWith('//')||lineTrimed.startsWith('#'))
      return `<span class="ck-cm">${line}</span>`;
    // Inline comment
    let code=line,comment='';
    const ci=line.indexOf('//');
    if(ci>0){code=line.substring(0,ci);comment=`<span class="ck-cm">${line.substring(ci)}</span>`;}
    // Strings
    code=code.replace(/"([^"]*)"/g,'<span class="ck-str">"$1"</span>');
    code=code.replace(/'([^']*)'/g,"<span class=\"ck-str\">'$1'</span>");
    // Numbers (standalone)
    code=code.replace(/\b(\d+\.?\d*)\b/g,'<span class="ck-num">$1</span>');
    // Keywords
    const KWS=['for','if','else','while','return','new','import','class','interface','extends','implements','super','this','null','true','false','static','public','private','protected','void','def','lambda','yield','pass','break','continue','try','catch','finally','throw','throws','switch','case','default','do','const','let','var','function','async','await'];
    const TYPES=['int','double','float','boolean','char','long','byte','short','String','List','ArrayList','Map','HashMap','Array','Object','Integer','Boolean','Double'];
    const FNS=['System','out','println','print','printf','Math','Scanner','input','range','len','append','push','pop','split','join','toString','valueOf','parseInt','parseDouble','size','get','set','add','remove','contains','equals'];
    KWS.forEach(k=>{code=code.replace(new RegExp(`\\b${k}\\b`,'g'),`<span class="ck-kw">${k}</span>`);});
    TYPES.forEach(t=>{code=code.replace(new RegExp(`\\b${t}\\b`,'g'),`<span class="ck-type">${t}</span>`);});
    FNS.forEach(f=>{code=code.replace(new RegExp(`\\b${f}\\b`,'g'),`<span class="ck-fn">${f}</span>`);});
    // Class names (CamelCase identifiers)
    code=code.replace(/\b([A-Z][a-zA-Z0-9]*)\b/g,'<span class="ck-cls">$1</span>');
    return code+comment;
  }).join('\n');
}

// DASHBOARD — PRACTICE ONLY
function renderDash(){
  const ans=S.practiceAns;
  const total=Object.keys(ans).length;
  const correct=Object.values(ans).filter(a=>a.correct).length;
  const acc=total?Math.round((correct/total)*100):0;
  const topics=[...new Set(Object.values(ans).map(a=>a.topic))].length;
  document.getElementById('srow').innerHTML=`
    <div class="stat-card"><div class="stat-val" style="color:var(--amber)">🔥 ${S.streak}</div><div class="stat-lbl">day streak</div></div>
    <div class="stat-card"><div class="stat-val">${total}</div><div class="stat-lbl">practice answers</div></div>
    <div class="stat-card"><div class="stat-val">${acc}%</div><div class="stat-lbl">accuracy</div></div>
    <div class="stat-card"><div class="stat-val">${topics}/${TMETA.filter(t=>t.ok).length}</div><div class="stat-lbl">topics tried</div></div>`;
  const hmap=document.getElementById('hmap');hmap.innerHTML='';
  TMETA.filter(t=>t.ok).forEach(t=>{
    const qs=QS.filter(q=>q.topic===t.name);
    const att=qs.filter(q=>ans[q.id]);
    const cor=att.filter(q=>ans[q.id]?.correct);
    const pct=att.length?Math.round((cor.length/att.length)*100):0;
    const col=pct>=80?'#4ade80':pct>=60?'#f0a03a':pct>0?'#f87171':'#3d4f6b';
    const bg=pct>=80?'rgba(74,222,128,.07)':pct>=60?'rgba(240,160,58,.07)':pct>0?'rgba(248,113,113,.07)':'var(--bg2)';
    const cell=document.createElement('div');cell.className='hm-cell';
    cell.style.cssText=`background:${bg};border-color:${pct>0?col:'var(--border)'}`;
    cell.innerHTML=`<div class="hm-topic">${t.icon} ${t.name}</div><div class="hm-pct" style="color:${col}">${att.length?pct+'%':'—'}</div><div class="hm-sub">${att.length}/${qs.length} done</div><div class="hm-bar"><div class="hm-fill" style="width:${pct}%;background:${col}"></div></div>`;
    hmap.appendChild(cell);
  });
  const recent=document.getElementById('rlist');
  const keys=Object.keys(ans).slice(-7).reverse();
  if(!keys.length){recent.innerHTML='<div class="empty" style="padding:1rem;text-align:left;font-size:13px">No practice activity yet. Start practising to see your history here.</div>';return;}
  const tColors={'Networking':'rgba(45,212,191,.1);color:var(--teal);border:1px solid rgba(45,212,191,.2)','Programming':'rgba(240,160,58,.1);color:var(--amber);border:1px solid rgba(240,160,58,.2)','Security':'rgba(248,113,113,.1);color:var(--red);border:1px solid rgba(248,113,113,.2)','Systems':'rgba(96,165,250,.1);color:var(--blue);border:1px solid rgba(96,165,250,.2)','Data':'rgba(74,222,128,.1);color:var(--green);border:1px solid rgba(74,222,128,.2)','OOP':'rgba(167,139,250,.1);color:var(--purple);border:1px solid rgba(167,139,250,.2)'};
  recent.innerHTML=keys.map(id=>{
    const q=QS.find(x=>x.id===+id);const a=ans[id];if(!q)return'';
    const tc=tColors[q.topic]||'rgba(107,127,163,.1);color:var(--muted);border:1px solid var(--border)';
    return `<div class="rec-item"><div class="rec-q">${q.text.substring(0,72)}${q.text.length>72?'...':''}</div><div style="display:flex;gap:6px;align-items:center;flex-shrink:0"><span class="rtag" style="background:${tc}">${q.topic}</span><span style="font-size:14px">${a.correct?'✓':'✗'}</span></div></div>`;
  }).join('');
}
function dailyChallenge(){
  const weak=TMETA.filter(t=>t.ok).map(t=>{
    const qs=QS.filter(q=>q.topic===t.name);
    const att=qs.filter(q=>S.practiceAns[q.id]);
    const cor=att.filter(q=>S.practiceAns[q.id]?.correct);
    return{name:t.name,pct:att.length?cor.length/att.length:0};
  }).sort((a,b)=>a.pct-b.pct);
  setTopic(weak[0]?.name||'Networking');go('practice');
}

// EXAM — written answer toggle
let writtenEnabled=false;
function toggleWritten(){
  writtenEnabled=!writtenEnabled;
  const pill=document.getElementById('written-pill');
  const card=document.getElementById('written-toggle-card');
  pill.classList.toggle('on',writtenEnabled);
  card.classList.toggle('on',writtenEnabled);
}

// Save written text before navigating away
function saveWrittenText(){
  const ta=document.getElementById('written-ta-current');
  if(ta){
    const qid=S.exam.qs[S.exam.qi]?.id;
    if(qid!==undefined)S.exam.writtenAnswers[qid]=ta.value;
  }
}

function getExamSettings(){
  const count=parseInt(document.getElementById('q-count').value)||20;
  const hrs=Math.max(0,Math.min(24,parseInt(document.getElementById('exam-hrs').value)||0));
  const mins=Math.max(0,Math.min(59,parseInt(document.getElementById('exam-mins').value)||0));
  return{count,hrs,mins,totalSecs:hrs*3600+mins*60};
}

function buildExamSet(count){
  const history=JSON.parse(localStorage.getItem('lp_examHist')||'[]');
  const recentIds=new Set(history.flat().slice(-(count*2)));
  const fresh=QS.filter(q=>!recentIds.has(q.id));
  const stale=QS.filter(q=>recentIds.has(q.id)).sort(()=>Math.random()-.5);
  const selected=[...fresh.sort(()=>Math.random()-.5),...stale].slice(0,count);
  history.push(selected.map(q=>q.id));
  if(history.length>5)history.shift();
  localStorage.setItem('lp_examHist',JSON.stringify(history));
  return selected;
}

function startExam(){
  const{count,totalSecs,hrs,mins}=getExamSettings();
  S.exam={
    qs:buildExamSet(count),qi:0,answers:{},writtenAnswers:{},
    selfGrades:{}, // {qid: 'full'|'partial'|'none'}
    written:writtenEnabled,iv:null,
    secs:totalSecs,noLimit:totalSecs===0,paused:false,
    lastSettings:{count,hrs,mins}
  };
  document.getElementById('estart').style.display='none';
  document.getElementById('eactive').style.display='block';
  document.getElementById('eres').style.display='none';
  document.getElementById('epause').style.display='none';
  if(!S.exam.noLimit)startTimer();
  else{document.getElementById('etimer').textContent='∞ No limit';document.getElementById('etimer').className='timer unlim';}
  renderEQ();
}

function startTimer(){
  const el=document.getElementById('etimer');
  el.className='timer';
  S.exam.iv=setInterval(()=>{
    if(S.exam.paused)return;
    S.exam.secs--;
    const m=Math.floor(S.exam.secs/60),s=S.exam.secs%60;
    el.textContent=`${m}:${s.toString().padStart(2,'0')}`;
    if(S.exam.secs<=120)el.classList.add('warn');
    if(S.exam.secs<=0){clearInterval(S.exam.iv);finishExam();}
  },1000);
}

function pauseExam(){
  saveWrittenText();
  S.exam.paused=true;
  document.getElementById('epause').style.display='flex';
}
function resumeExam(){
  S.exam.paused=false;
  document.getElementById('epause').style.display='none';
}

function renderEQ(){
  const{qs,qi,answers,written,writtenAnswers}=S.exam;
  const q=qs[qi];
  document.getElementById('eqc').textContent=`Q ${qi+1} of ${qs.length}`;
  const cor=Object.keys(answers).filter(id=>{const qx=qs.find(x=>x.id===+id);return qx&&answers[+id]===qx.ans;}).length;
  document.getElementById('elive').textContent=`${cor} correct`;
  const prev=answers[q.id];
  const nb=document.getElementById('enxt');

  // MCQ is answered when prev is defined. If written, also require a non-empty answer.
  const writtenText=writtenAnswers[q.id]||'';
  const canProceed = written ? (prev!==undefined) : (prev!==undefined);
  nb.disabled=!canProceed;
  nb.textContent=qi<qs.length-1?'Next →':'Finish Exam';

  // Options
  const opts=q.opts.map((o,i)=>{
    let c='q-opt';
    if(prev!==undefined){
      if(i===q.ans)c+=' correct';
      else if(i===prev&&prev!==q.ans)c+=' wrong';
      else c+=' dim';
    }
    return `<button class="${c}" ${prev!==undefined?'disabled':''} onclick="ansE(${i})">${o}</button>`;
  }).join('');

  const expHTML=prev!==undefined?`<div class="q-explain show">${q.exp}</div>`:'';

  // Written answer section
  let writtenHTML='';
  if(written){
    const isAnswered=prev!==undefined;
    writtenHTML=`
      <div class="written-section">
        <div class="written-label">Written Answer</div>
        <div class="written-hint">${isAnswered?'Your written response is saved. You\'ll compare it with the model answer during review.':'Write your explanation or reasoning below. The multiple-choice answer confirms the correct option; your written answer is your chance to explain your thinking.'}</div>
        <textarea id="written-ta-current" class="written-ta" placeholder="Write your answer here — explain the concept in your own words, as if answering a 4-mark IB question…" oninput="saveWrittenLive()" ${isAnswered?'':''}>${isAnswered?escHTML(writtenText):writtenText}</textarea>
        <div class="written-chars" id="written-chars">${(isAnswered?writtenText:writtenText).length} chars</div>
      </div>`;
  }

  document.getElementById('eqa').innerHTML=`
    <div class="q-card">
      <div class="q-hdr">
        <span class="q-topic-tag">${q.topic} · ${q.unit}</span>
        <span class="q-marks-tag">${q.marks} marks · ${q.lvl}${written?' · ✍️ written':''}</span>
      </div>
      <div class="q-body">
        <p class="q-text">${q.text}</p>
        <div class="q-opts">${opts}</div>
        ${expHTML}
        ${writtenHTML}
      </div>
    </div>`;
}

function escHTML(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}

function saveWrittenLive(){
  const ta=document.getElementById('written-ta-current');
  if(!ta)return;
  const qid=S.exam.qs[S.exam.qi]?.id;
  if(qid!==undefined){
    S.exam.writtenAnswers[qid]=ta.value;
    const cc=document.getElementById('written-chars');
    if(cc)cc.textContent=ta.value.length+' chars';
  }
}

function ansE(chosen){
  saveWrittenText();
  S.exam.answers[S.exam.qs[S.exam.qi].id]=chosen;
  renderEQ();
  document.getElementById('enxt').disabled=false;
}

function examNext(){
  saveWrittenText();
  const{qs,qi}=S.exam;
  if(qi<qs.length-1){S.exam.qi++;renderEQ();}else finishExam();
}

function finishExam(){
  saveWrittenText();
  clearInterval(S.exam.iv);
  const{qs,answers,written}=S.exam;
  let cor=0;qs.forEach(q=>{if(answers[q.id]===q.ans)cor++;});
  const pct=Math.round((cor/qs.length)*100);
  document.getElementById('eactive').style.display='none';
  document.getElementById('eres').style.display='block';
  document.getElementById('rscore').textContent=pct+'%';
  const[grade,gc,gbg]=pct>=80?['Grade 7','#4ade80','rgba(74,222,128,.1)']:pct>=70?['Grade 6','#86efac','rgba(134,239,172,.08)']:pct>=60?['Grade 5','#f0a03a','rgba(240,160,58,.1)']:pct>=50?['Grade 4','#fbbf60','rgba(251,191,96,.08)']:['Grade 3 or below','#f87171','rgba(248,113,113,.1)'];
  const ge=document.getElementById('rgrade');ge.textContent=`${grade} — ${cor}/${qs.length} correct`;ge.style.cssText=`background:${gbg};color:${gc};border:1px solid ${gc}40`;
  // Written note
  const wNote=document.getElementById('written-results-note');
  if(written)wNote.classList.add('show');else wNote.classList.remove('show');
  // Breakdown by topic
  const byT={};qs.forEach(q=>{if(!byT[q.topic])byT[q.topic]={cor:0,tot:0};byT[q.topic].tot++;if(answers[q.id]===q.ans)byT[q.topic].cor++;});
  let bHTML='<div style="margin-top:2rem"><div style="font-family:var(--mono);font-size:10px;color:var(--muted);letter-spacing:.08em;text-transform:uppercase;margin-bottom:.875rem">Results by topic</div>';
  Object.entries(byT).forEach(([t,d])=>{const p=Math.round((d.cor/d.tot)*100);const c=p>=70?'#4ade80':p>=50?'#f0a03a':'#f87171';bHTML+=`<div style="display:flex;align-items:center;justify-content:space-between;padding:.5rem 0;border-bottom:1px solid var(--border);font-size:13px"><span style="color:var(--text)">${t}</span><span style="font-family:var(--mono);color:${c}">${d.cor}/${d.tot} (${p}%)</span></div>`;});
  bHTML+='</div>';document.getElementById('rbreak').innerHTML=bHTML;
}

function reviewExam(){
  const{qs,answers,written,writtenAnswers,selfGrades}=S.exam;
  document.getElementById('eres').style.display='none';
  document.getElementById('eactive').style.display='block';
  if(!S.exam.noLimit){document.getElementById('etimer').textContent='Review';document.getElementById('etimer').className='timer unlim';}
  document.getElementById('elive').textContent='';

  function showR(i){
    if(i>=qs.length){resetExam();return;}
    const q=qs[i];const chosen=answers[q.id];
    const correct=chosen===q.ans;
    document.getElementById('eqc').textContent=`Review ${i+1} of ${qs.length}`;

    const opts=q.opts.map((o,xi)=>`<button class="q-opt ${xi===q.ans?'correct':xi===chosen&&chosen!==q.ans?'wrong':'dim'}" disabled>${o}</button>`).join('');

    // Model answer + written answer comparison panel
    let writtenPanelHTML='';
    if(written){
      const userText=writtenAnswers[q.id]||'';
      const grade=selfGrades[q.id]||'';
      const uid=`sg-${q.id}`;
      writtenPanelHTML=`
        <div class="model-answer-box" id="mab-${q.id}">
          <div class="ma-header" onclick="toggleMA(${q.id})">
            <div class="ma-header-left">
              <span>✍️ Written Answer &amp; Model Answer</span>
              <span class="ma-tag">${q.marks} marks</span>
            </div>
            <span class="ma-chevron open" id="mach-${q.id}">▾</span>
          </div>
          <div class="ma-body" id="mabody-${q.id}">
            <div class="ma-section">
              <div class="ma-section-label" style="color:var(--blue)">Your written answer</div>
              <div class="ma-your-text ${userText?'':'empty-ans'}">${userText?escHTML(userText):'(no written answer provided)'}</div>
            </div>
            <div class="ma-section">
              <div class="ma-section-label" style="color:var(--teal)">Model answer</div>
              <div class="ma-model-text">${q.exp}</div>
            </div>
            <div class="ma-section">
              <div class="ma-section-label" style="color:var(--amber)">Self-grade your written answer</div>
              <div class="self-grade" id="${uid}">
                <button class="sg-btn ${grade==='full'?'sg-full':''}" onclick="setSelfGrade(${q.id},'full','${uid}')">✓ Full marks</button>
                <button class="sg-btn ${grade==='partial'?'sg-partial':''}" onclick="setSelfGrade(${q.id},'partial','${uid}')">~ Partial</button>
                <button class="sg-btn ${grade==='none'?'sg-none':''}" onclick="setSelfGrade(${q.id},'none','${uid}')">✗ Needs work</button>
              </div>
            </div>
          </div>
        </div>`;
    }

    document.getElementById('eqa').innerHTML=`
      <div class="q-card">
        <div class="q-hdr">
          <span class="q-topic-tag">${q.topic} · ${q.unit}</span>
          <span class="q-marks-tag">${correct?'✓ Correct':'✗ Wrong'}</span>
        </div>
        <div class="q-body">
          <p class="q-text">${q.text}</p>
          <div class="q-opts">${opts}</div>
          <div class="q-explain show">${q.exp}</div>
          ${writtenPanelHTML}
        </div>
      </div>`;

    const nb=document.getElementById('enxt');
    nb.disabled=false;
    nb.textContent=i<qs.length-1?'Next →':'Done';
    nb.onclick=()=>showR(i+1);
  }

  document.getElementById('enxt').onclick=()=>showR(1);
  showR(0);
}

// Written answer model-answer panel toggle
function toggleMA(qid){
  const body=document.getElementById(`mabody-${qid}`);
  const chev=document.getElementById(`mach-${qid}`);
  const isOpen=body.style.display!=='none';
  body.style.display=isOpen?'none':'block';
  chev.classList.toggle('open',!isOpen);
}

// Self-grade a written answer
function setSelfGrade(qid,grade,uid){
  S.exam.selfGrades[qid]=grade;
  const container=document.getElementById(uid);
  if(!container)return;
  container.querySelectorAll('.sg-btn').forEach(b=>b.className='sg-btn');
  const map={full:'sg-full',partial:'sg-partial',none:'sg-none'};
  const active=container.querySelector(`.sg-btn:nth-child(${grade==='full'?1:grade==='partial'?2:3})`);
  if(active)active.classList.add(map[grade]);
}

function retakeExam(){
  const{count,hrs,mins}=S.exam.lastSettings;
  document.getElementById('q-count').value=count;
  document.getElementById('q-count-val').textContent=count;
  document.getElementById('exam-hrs').value=hrs;
  document.getElementById('exam-mins').value=mins;
  // Keep written toggle state from last exam
  if(S.exam.written!==writtenEnabled){
    writtenEnabled=S.exam.written;
    const pill=document.getElementById('written-pill');
    const card=document.getElementById('written-toggle-card');
    pill.classList.toggle('on',writtenEnabled);
    card.classList.toggle('on',writtenEnabled);
  }
  startExam();
}

function resetExam(){
  clearInterval(S.exam.iv);
  document.getElementById('estart').style.display='';
  document.getElementById('eactive').style.display='none';
  document.getElementById('eres').style.display='none';
  document.getElementById('epause').style.display='none';
  document.getElementById('etimer').className='timer';
  document.getElementById('enxt').onclick=examNext;
}

// INIT
document.getElementById('sc').textContent=S.streak;
renderTGrid();renderTFilters();buildPS();renderP();renderCGrid();renderHomeStats();
