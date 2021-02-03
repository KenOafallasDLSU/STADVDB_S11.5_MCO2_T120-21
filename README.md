# STADVDB_S11.5_MCO2_T120-21
STADVDB MCO2 OLAP Application Git Repository

## Build for local
### Step 0: Install Node.js and npm
### Step 1: Create financial data warehouse using FinancialWH.sql found in Team Notion to MySQL

### Step 2: Run ETL tool to load data into warehouse

### Step 3: Modify the mysql.js file to your connection's configuration with the financial database
```
exports.db = mysql.createConnection({
  host: "yourHostName",
  port: "yourPortNumber",
  user: "yourUsername",
  password: "yourPassword",
  database: "financialwh"
})
```

### Step 4: Install dependencies
```
npm install
```

### Step 5: Compiles and starts local instance
```
npm start
```

### Step 6: Access local instance on localhost:3000
