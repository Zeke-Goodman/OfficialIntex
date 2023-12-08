// // let express = require("express")
// // let app = express()
// // const serveStatic = require('serve-static');
// // const path = require('path');


// // const publicPath = path.join(__dirname, 'template/assets'); // Update the path accordingly



// // const port = 3000;

// // app.set("view engine", "ejs"); 
// // app.use(serveStatic(publicPath));

// // app.use(express.static(path.join(__dirname, 'template/assets'), {
// //     setHeaders: (res, path) => {
// //         if (path.endsWith('.css')) {
// //             res.setHeader('Content-Type', 'text/css');
// //         }
// //     }
// // }));


// // app.use(express.urlencoded({extended:true}));
// // // app.use(express.static(__dirname, 'assets' ));


// // app.get('/', (req, res) => { 
// //     res.render('index');
// // })

// // app.listen(port, () => console.log("I am listening"));

// // second attempt


// // const express = require("express");
// // const app = express();
// // const path = require('path');
// // const serveStatic = require('serve-static');

// // const publicPath = path.join(__dirname, 'template/assets/css/');

// // const port = 3000;

// // app.set("view engine", "ejs");
// // app.use(serveStatic(publicPath));

// // app.use(express.static(path.join(__dirname, 'template/assets/css/'), {
// //     setHeaders: (res, path) => {
// //         if (path.endsWith('.css')) {
// //             res.setHeader('Content-Type', 'text/css');
// //         }
// //     }
// // }));


// // app.use(express.urlencoded({ extended: true }));

// // app.get('/', (req, res) => {
// //     res.render('index');
// // });

// // app.listen(port, () => console.log("Server is listening on port", port));

// // try 3


// // const express = require("express");
// // const app = express();
// // const path = require('path');

// // const publicPath = path.join(__dirname, 'template/assets'); // Specify the root of your assets

// // const port = 3000;

// // app.set("view engine", "ejs");

// // // Serve static files from the 'template/assets' directory
// // app.use(express.static(publicPath, {
// //     setHeaders: (res, path) => {
// //         if (path.endsWith('.css')) {
// //             res.setHeader('Content-Type', 'text/css');
// //         }
// //     }
// // }));

// // app.use(express.urlencoded({ extended: true }));

// // app.get('/', (req, res) => {
// //     res.render('index');
// // });

// // app.listen(port, () => console.log("Server is listening on port", port));

// // try 4
// const express = require("express");
// const app = express();
// const path = require('path');

// const publicPath = path.join(__dirname, 'template/assets');

// const port = process.env.PORT || 3000;

// app.set("view engine", "ejs");

// // Serve static files from the 'template/assets' directory
// app.use(express.static(publicPath, {
//     setHeaders: (res, path) => {
//         if (path.endsWith('.css')) {
//             res.setHeader('Content-Type', 'text/css');
//         }
//     }
// }));

// app.use(express.urlencoded({ extended: true }));

// // app.use(session({
// //     secret: 'your-secret-key',
// //     resave: false,
// //     saveUninitialized: true,
// // }));

// const knex = require('knex')({
//     client: 'pg',
//     connection: {
//         host: process.env.RDS_HOSTNAME || 'localhost',
//         user: process.env.RDS_USERNAME || 'postgres',
//         password: process.env.RDS_PASSWORD || '6EzP9PwM',
//         database: process.env.RDS_DB_NAME || 'passwords',
//         port: process.env.RDS_PORT || 5432,
//         ssl: process.env.DB_SSL ? {rejectUnauthorized: false} : false
//     }
// })

// // unsecured initial route but works
// app.get('/', (req, res) => {
//     res.render('index');
// });

// app.get('/login', (req, res) => {
//     res.render('login');
// });

// app.get('/register', (req, res) => {
//     res.render('register');
// });

// app.get('/dashboard', (req, res) => {
//     res.render('dashboard');
// });

// app.get('/survey', (req, res) => {
//     res.render('survey');
// });

// app.get('/report', (req, res) => {
//     res.render('report');
//   });



// // app.get('/', (req, res) => { 
// //     res.render('index', { loggedIn: req.session.loggedIn || 'false' });
// // })
// // ​
// // app.post('/', (req, res) => {
// //     req.session.loggedIn = 'false';
// //     res.render('loginPage', { loggedIn: req.session.loggedIn || 'false' })
// // })

// // app.post('/loginPage', (req, res) => {
// //     let username = req.body.username;
// //     let password = req.body.password;
// //     knex.select('password').from('logininfo').where('username', username).then( results => {
// //         if (results.length > 0)
// //         {
// //             if (password === results[0].password)
// //             {
// //                 req.session.loggedIn = 'true';
// //                 res.redirect('/displayLogininfo');
// //             }
// //             else
// //             {
// //                 req.session.loggedIn = 'password';
// //                 res.redirect('/displayLogininfo');
// //             }
// //         }
// //         else 
// //         {
// //             req.session.loggedIn = 'username';
// //             res.redirect('/displayLogininfo');
// //         }
// //     }).catch(err => {
// //         console.log(err);
// //         res.status(500).json({err});
// //     });
// // })
// // ​
// // ​
// // app.get('/displayLogininfo', (req, res) => {
// //     let loggedIn = req.session.loggedIn || 'false';
// //     knex.select().from('logininfo').then( logininfo => {
// //         res.render('displayLogininfo', {mylogininfo : logininfo, loggedIn: loggedIn})
// //     })
// // });
// // ​
// // app.get("/addUser", (req, res) => {
// //     let loggedIn = req.session.loggedIn || 'false';
// //     res.render('addUser', {loggedIn: loggedIn});
// // });
// // ​
// // app.post('/addUser', (req, res) => {
// //     knex('logininfo').insert(req.body).then(mylogininfo => {
// //         res.redirect('/displayLogininfo');
// //     })
// // });
// // ​
// // app.get("/editUser/:user_id", (req, res) => {
// //     let loggedIn = req.session.loggedIn || 'false';
// //     let user_id = req.params.user_id;
// //     knex.select('user_id', 'username', 'password').from('logininfo').where('user_id', user_id).then(logininfo => {
// //         res.render('editUser', {mylogininfo : logininfo, loggedIn: loggedIn});
// //     }).catch(err => {
// //         console.log(err);
// //         res.status(500).json({err});
// //     });
// // });
// // ​
// // app.post("/editUser", (req, res) => {
// //     knex("logininfo").where("user_id", parseInt(req.body.user_id)).update({
// //         username: req.body.username,
// //         password: req.body.password
// //     }).then(mylogininfo => {
// //         res.redirect("/displayLogininfo");
// //     });    
// // }); 
// // ​
// // app.post('/deleteUser/:id', ( req, res) => {
// //     knex('logininfo').where('user_id', req.params.id).del().then(mylogininfo => {
// //         res.redirect('/displayLogininfo');
// //     }).catch(err => {
// //         console.log(err);
// //         res.status(500).json({err});
// //     })
// // });



// app.listen(port, () => console.log("Server is listening on port", port));



// deployed code: 
const express = require("express");
const app = express();
const path = require('path');
const publicPath = path.join(__dirname, 'template/assets');
const port = process.env.PORT || 3000;
const session = require('express-session');

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
}));

app.use(express.json());

app.set("view engine", "ejs");

// Serve static files from the 'template/assets' directory
app.use(express.static(publicPath, {
    setHeaders: (res, path) => {
        if (path.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
    }
}));

app.use(express.urlencoded({ extended: true }));
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: process.env.RDS_HOSTNAME || 'localhost',
        user: process.env.RDS_USERNAME || 'postgres',
        password: process.env.RDS_PASSWORD || '6EzP9PwM',
        database: process.env.RDS_DB_NAME || 'intexLocal',
        port: process.env.RDS_PORT || 5432,
        ssl: process.env.DB_SSL ? {rejectUnauthorized: false} : false
    }
})

// unsecured initial route but works
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/logout', (req, res) => {
    req.session.loggedIn = 'false';
    req.session.edit = 'false';
    res.redirect('/')
})

app.get('/index', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    
    res.render('login', { loggedIn: req.session.loggedIn || 'false' });
});

app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    knex.select('password').from('users').where('username', username).then( results => {
        if (results.length > 0)
        {
            if (password === results[0].password)
            {
                req.session.loggedIn = 'true';
                res.redirect('/report');
            }
            else
            {
                req.session.loggedIn = 'password';
                res.redirect('/login');
            }
        }
        else 
        {
            req.session.loggedIn = 'username';
            res.redirect('/login');
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({err});
    });
})

app.get('/register', (req, res) => {
    knex.select().from('users').then( users => {
        let loggedIn = req.session.loggedIn || 'false';
        let edit = req.session.edit || 'false';
     res.render('register', {myUsers : users, loggedIn: loggedIn, edit: edit})
    })
});

app.post('/register', (req, res) => {
    knex('users').insert(req.body).then( users => {
        res.redirect('/register');
    })
});

app.get('/edit/:userId', (req, res) => {
    let loggedIn = req.session.loggedIn || 'false';
    let edit = 'true';
    let userId = req.params.userId;
    knex.select('userId', 'username', 'password').from('users').where('userId', userId).then(users => {
        res.render('register', {myUsers : users, loggedIn: loggedIn, edit: edit});
    }).catch(err => {
        console.log(err);
        res.status(500).json({err});
    });
});

app.post("/edit", (req, res) => {
    knex("users").where("userId", parseInt(req.body.userId)).update({
        username: req.body.username,
        password: req.body.password
    }).then(myUsers => {
        let edit = 'false';
        res.redirect("/register");
    });    
}); 

app.post('/deleteUser/:id', ( req, res) => {
    knex('users').where('userId', req.params.id).del().then(myUsers => {
        res.redirect('/register');
    }).catch(err => {
        console.log(err);
        res.status(500).json({err});
    })
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

app.get('/survey', (req, res) => {
    res.render('survey');
});

/*
app.post('/newRecord', (req, res) => {
    knex('surveys').insert({
        timeStamp: knex.raw('CURRENT_TIMESTAMP'),
        orgNum: ,
        platformNum: ,
        surveyId: 
    })
})

*/

//=== Martin Code

app.post("/addResponse", async (req, res) => {
    console.log("Received submission:", req.body);
    try {
      // Start a transaction
      await knex.transaction(async (trx) => {
        console.log("Starting transaction");
        // Insert into 'main' table and get the 'response_id'
        const mainInsertResult = await trx("main")
          .insert({
            date: new Date().toJSON().slice(0, 10),
            time: new Date().toLocaleTimeString(),
            social_media: req.body.socialmedia_yn ? "Yes" : "No",
          })
          .returning("response_id");

        const responseId = mainInsertResult[0].response_id; // This extracts the number from the array.
        console.log("Inserted into main table, response_id:", responseId);
        console.log("responseId (should be an integer):", responseId);
        if (typeof responseId !== "number") {
          throw new Error("responseId is not a number");
        }
        console.log("Preparing to insert into demographics table");
        await trx("demographics").insert({
          // response_id: responseId,
          age: req.body.age,
          gender: req.body.gender,
          relationship_status: req.body.relationship,
          occupation_status: req.body.occupation,
          city: req.body.city,
        });
        console.log("Inserted into demographics table");
        // Insert into 'daily_use' table
        await trx("daily_use").insert({
          // response_id: responseId,
          social_media: req.body.socialmedia_yn,
          average_daily_social_media_use_hours: req.body.use_time,
        });
        // Insert into 'general_survey' table
        await trx("general_survey").insert({
          // response_id: responseId,
          distractedness_rating: req.body.distraction,
          worries_rating: req.body.worries,
          concentration_difficulty_rating: req.body.concentrate,
          depression_rating: req.body.depressed,
          interest_fluctuation_rating: req.body.interest,
          sleep_issue_rating: req.body.Sleep,
        });
        console.log("Inserted into g_s table");
        // Insert into 'comparison_survey' table
        await trx("comparison_survey").insert({
          // response_id: responseId,
          social_media: req.body.socialmedia_yn,
          comparison_rating: req.body.compare,
          followup_comparison_rating: req.body.feelings,
        });
        console.log("Inserted into c_S table");
        // Insert into 'social_media_survey' table
        await trx("social_media_survey").insert({
          // response_id: responseId,
          social_media: req.body.socialmedia_yn,
          non_specific_use_rating: req.body.purpose,
          social_media_distraction_rating: req.body.busy,
          restlessness_rating: req.body.restless,
          seek_validation_rating: req.body.validation,
        });
        console.log("Inserted into social media table");
        // Insert into 'platforms_used' table
        await trx("platforms_used").insert({
          // response_id: responseId,
          social_media: req.body.socialmedia_yn,
          // ... Insert other platforms as needed ...
        });
        // Insert into 'org_affiliation' table, if any affiliations are selected
        const affiliations = req.body.affiliate; // This should be an array of strings like ["University", "Private"]
        if (affiliations && Array.isArray(affiliations)) {
          // Create an array of objects to insert, with 'affiliation_number' starting from 1
          const orgAffiliationInserts = affiliations.map(
            (affiliationString, index) => ({
              response_id: responseId, // The same 'response_id' for all affiliations
              affiliation_number: index + 1, // Sequential number starting from 1
              organization_affiliation: affiliationString, // The actual affiliation string
            })
          );
          // Perform the insert with the array of objects
          await trx("organization_affiliation").insert(orgAffiliationInserts);
        }
      });
    } catch (error) {
      console.error("Error during response submission:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


//==== MY CODE

app.post("/newRecord", async (req, res) => {
    try {
        const selectedPlatforms = req.body.socialPlatform;
        const selectedOrganisations = req.body.organisation;
       
        const surveyResponse = {
            timestamp: knex.raw('CURRENT_TIMESTAMP'),
            age: req.body.age,
            gender: req.body.gender,
            relationshipStatus: req.body.relationshipStatus,
            occupation: req.body.occupation,
            mediaUser: req.body.mediaUser,
            avgTime: req.body.avgTime,
            noPurpose: req.body.noPurpose,
            distractionFreq: req.body.distractionFreq,
            restlessLvl: req.body.restlessLvl,
            distractionSusceptability: req.body.distractionSusceptability,
            botheredByWorries: req.body.botheredByWorries,
            difficultyConcentrating: req.body.difficultyConcentrating,
            comparisonFreq: req.body.comparisonFreq,
            comparisonFeeling: req.body.comparisonFeeling,
            validationFreq: req.body.validationFreq,
            depressionFreq: req.body.depressionFreq,
            dailyInterestFluctuation: req.body.dailyInterestFluctuation,
            sleepProblemsFreq: req.body.sleepProblemsFreq,
            mentalHealthScore: req.body.mentalHealthScore,
            origin: req.body.originText
        };
        console.error("Saving response", surveyResponse);
       const responses = await knex("responses")
       .insert(surveyResponse)
       .returning('responseId');

       await Promise.all(responses);

       const platformInsertPromises = selectedPlatforms.map(platform => {
        return knex("platform").insert({
           timestamp: knex.raw('CURRENT_TIMESTAMP'),
           platformNum: 1, //Assuming the array has only 1 argument for now
           platformName: platform //Assuming the variable platform has the name of the platform and nothing else
        });
        });

        console.log("platformInsertPromises: " + platformInsertPromises);

        await Promise.all(platformInsertPromises);

        const organisationInsertPromises = selectedOrganisations.map(organisation => {
            return knex("records").insert({
                timeStamp: knex.raw('CURRENT_TIMESTAMP'),
                orgNum: 1, //Assuming the array has only 1 argument for now
                orgName: organisation //Assuming the variable organisation has the name of the organisation and nothing else
            });
        });

        console.log("organisationInsertPromises: " + organisationInsertPromises);

        await Promise.all(organisationInsertPromises);

        const surveyId = await knex("surveys")
          .insert({
            timeStamp: knex.raw('CURRENT_TIMESTAMP'),
            orgNum: 1, //Assuming the array has only 1 argument for now
            platformNum: 1 //Assuming the array has only 1 argument for now
          })
          .returning('surveyId');

       console.log("Survey ID: " + surveyId);
        
        res.redirect("/");

    } catch (error) {
       console.error('Error:', error);
       res.status(500).send('Error submitting survey.');
    }
 });

/*
app.post('/newRecord', async (req, res) => {
    //const { orgNum, platformNum, surveyId /* Add other fields from req.body } = req.body;

    try {
        await knex.transaction(async (trx) => {
            // Insert into 'surveys' table
            const surveyId = await trx('surveys').insert({
                timeStamp: knex.raw('CURRENT_TIMESTAMP'),
                orgNum: 9999,
                platformNum: 9999,
                // Add other survey fields
            }).returning('surveyId');
            console.log(orgNum);

            /*
            const surveyId = surveyIdResult[0];

            // Insert into 'responses' table
            await trx('responses').insert({
                surveyId,
                avgTime,
                gender,
                mediaUser,
                occupation,
                origin,
                relationshipStatus,
                timeStamp,
                age,
                botheredByWorries,
                comparisonFeeling,
                comparisonFreq,
                dailyInterestFluctuation,
                depressionFreq,
                difficultyConcentrating,
                distractionFreq,
                distractionSusceptability,
                mentalHealthScore,
                noPurpose,
                restlessLvl,
                sleepProblemsFreq,
                validationFreq
                // Add other response fields
            });

            // Insert into 'platform' table
            await trx('platform').insert({
                platformName,
                timeStamp,
                platformId,
                platformNum,
                // Add other platform fields
            });

            // Insert into 'organisations' table
            await trx('organisations').insert({
                orgName,
                timeStamp,
                orgId,
                orgNum,
                // Add other organisation fields
            });
            */

            // If everything is successful, commit the transaction

/*
            trx.commit();
        });

        res.status(200).send('Record inserted successfully');
    } catch (error) {
        console.error('Error inserting record:', error);

        // If an error occurs, rollback the transaction
        trx.rollback();

        res.status(500).send('Internal Server Error');
    }
});
*/



app.post('/filterReport', (req, res) => {
    // Assuming you get the new responseId from the request body or parameters
     // Adjust based on your data
    const filterColumn = req.body.filterColumn
    // Update req.session.responseId with the new value
    
    req.session.filterColumn = filterColumn;
    req.session.filter = 'true'
    res.redirect('/report');
});

app.post('/report', (req, res) => {
    // Assuming you get the new responseId from the request body or parameters
    const newResponseId = req.body.newResponseId; // Adjust based on your data
    // Update req.session.responseId with the new value
    req.session.responseId = newResponseId;
    res.redirect('/report');
});


app.get('/report', (req, res) => {
    let loggedIn = req.session.loggedIn || 'false';
    let responseId = req.session.responseId || 122;
    let filter = req.session.filter || 'false'
    
    const organisationsQuery = knex.select()
        .from('organisations')
        .innerJoin('responses', 'organisations.timeStamp', 'responses.timestamp')
        .where('responses.responseId', responseId);

    const platformQuery = knex.select()
        .from('platform')
        .innerJoin('responses', 'platform.timestamp', 'responses.timestamp')
        .where('responses.responseId', responseId);

    const responsesQuery = knex.select().from('responses').where('responseId', responseId);

        if (filter === 'true') {
            const responsesQuery1 = knex.select().from('responses').where(req.session.filterColumn, responseId);
            Promise.all([organisationsQuery, platformQuery, responsesQuery, responsesQuery1])
            .then(([organisations, platform, responses, responses2]) => {
                // Render the 'report' view and pass the combined data
                res.render('report', { myOrganisations: organisations, 
                                            myPlatform: platform, 
                                            myResponses: responses, 
                                            formResponses: responses2, 
                                            loggedIn: loggedIn,
                                            view: view});
                req.session.filter = 'true'
            })
            .catch(error => {
                // Handle errors if any
                console.error('Error fetching data:', error);
                res.status(500).send('Internal Server Error');
            });
        } 
        
        else {
            const responsesQuery1 = knex.select().from('responses');
            Promise.all([organisationsQuery, platformQuery, responsesQuery, responsesQuery1])
            .then(([organisations, platform, responses, responses2]) => {
                // Render the 'report' view and pass the combined data
                res.render('report', { myOrganisations: organisations, 
                                            myPlatform: platform, 
                                            myResponses: responses, 
                                            formResponses: responses2, 
                                            loggedIn: loggedIn});
            })
            .catch(error => {
                // Handle errors if any
                console.error('Error fetching data:', error);
                res.status(500).send('Internal Server Error');
            });
        }
    

    // Use Promise.all to execute both queries concurrently

});




app.listen(port, () => console.log("Server is listening on port", port));