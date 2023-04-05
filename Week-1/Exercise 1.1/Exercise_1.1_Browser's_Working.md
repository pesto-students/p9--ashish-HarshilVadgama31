# Week 1 Assignment

### **Exercise 1.1:**

### **1. When a user enters an URL in the browser, how does the browser fetch the desired result ? Explain this with the below in mind and Demonstrate this by drawing a diagram for the same.**

**a. What is the main functionality of the browser?
b. High Level Components of a browser.
c. Rendering engine and its use.
d. Parsers (HTML, CSS, etc)
e. Script Processors
f. Tree construction
g. Order of script processing
h. Layout and Painting**

### Answer:

When a user enters an URL (Uniform Resource Locator) in the browser, the browser goes through a series of steps in order to fetch the desired resource and display it to the user. These steps include resolving the domain name in the URL to an IP address, sending a request for the resource to the server at that IP address, and rendering the received resource for the user to view.

- The first step in this process is resolving the domain name in the URL to an IP address. The browser uses the Domain Name System (DNS) to accomplish this. When the user enters a URL, the browser sends a request to the DNS to resolve the domain name to an IP address. The DNS server looks up the IP address associated with the domain name and returns it to the browser. This process is called DNS resolution.
- Once the browser has the IP address, it sends a request to the server at that address for the resource specified in the URL. The protocol used in the URL, such as HTTP or HTTPS, determines the format of the request. For example, if the URL starts with "http://", the browser sends an HTTP request, and if it starts with "https://", the browser sends an HTTPS request. The request includes information such as the type of request (GET, POST, etc.), the requested resource, and any additional headers or parameters.
- The server receives the request and processes it. If the requested resource is available, the server sends a response back to the browser. The response includes information such as the status of the request, the type of the resource, and the actual resource data.
- The browser receives the response and starts rendering the resource for the user to view. The type of resource, such as HTML, CSS, or JavaScript, determines how the browser renders it. For example, if the resource is an HTML file, the browser parses the HTML code and creates a Document Object Model (DOM) to represent the structure of the page. It then uses the CSS styles and JavaScript scripts to apply the layout and interactivity to the page.
- It's also worth mentioning that the browser caches some of the resources it fetches, such as images, stylesheets, and scripts, to make the process faster in the future. When the browser sends a request for a resource, it includes a "cache-control" header that tells the server whether the browser has a cached copy of the resource and if the cached copy is still fresh. If the server returns a "304 Not Modified" status code, the browser knows it can use the cached copy instead of requesting the resource again.

- Diagrammatic representation: 

![Diagram Assignment 1.png](/Week-1/Exercise%201.1/Diagram-Assignment-1.png)

In summary, when a user enters an URL in the browser, the browser uses the DNS to resolve the domain name to an IP address, sends a request to the server at that IP address for the resource specified in the URL, receives the resource and renders it for the user to view. This process, starting from the user entering the URL in the browser to the browser displaying the final webpage, happens in a matter of milliseconds. Caching mechanism makes sure that the same resources don't need to be fetched multiple times, resulting in faster browsing.