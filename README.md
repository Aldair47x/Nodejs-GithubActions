<h1>♛ Nodejs hello world with GitHub Actions ♛ </h1>

<h2>Problem Statement</h2>

<p>
In this project will be create a sample of test for Github Actions with Nodejs.
</p>

<br>

<h2>Mandatory Features</h2>
<ul>

<li>
The web server should be created using only native HTTP module. ✓
</li>

<li>
Accept requests for the GET /projects/:id endpoint, where id is the value passed in the url. If the id value is not set or is empty in the url, the server responds back with the status code 400 and the JSON message {"message": "BAD REQUEST"}. ✓
</li>

<li>
If the ID is valid, filter the projects list based on the ID passed as input to the endpoint such that project id matched the input passed. The server sends a JSON response back with the filtered project data, along with the status code 200. ✓
</li>

<li>
If the ID is valid but no matching projects are found for the ID, the server responds with the status code 404. ✓
</li>

<li>
If the request to the web server contains a route other than /projects, the server responds back with the status code 404. ✓
</li>

<li>
Make sure that the server is listening for requests on port 8000. External tools will not be able to be connected to any port other than 8000. ✓
</li>


</ul>

<br>


[![Screenshot-21.png](https://i.postimg.cc/FRFPhjMr/Screenshot-21.png)](https://postimg.cc/d7XRBTQp)


## Installing and Running

1. Make sure that you have `node` and `npm` installed on your computer.
2. Fork and clone this repo on your computer.
3. `cd` into the root directory and run ` npm install`.
4. Run `npm start` and point your browser to `localhost:8000`.


<br>

## Authors

* **Aldair Bernal** - *Full work* - [Aldair47x](https://github.com/Aldair47x)


Follow me! – [aldair47x@Twitter](https://twitter.com/aldair47x) – aldair47x@gmail.com

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.