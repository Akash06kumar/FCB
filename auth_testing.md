# Auth Testing Playbook (FCB Cake Wala)

Step 1: MongoDB Verification
```
mongosh
use test_database
db.users.find({role: "admin"}).pretty()
```
Verify: bcrypt hash starts with `$2b$`, unique index on users.email, index on login_attempts.identifier.

Step 2: API Testing
```
API=$(grep REACT_APP_BACKEND_URL /app/frontend/.env | cut -d '=' -f2)
TOKEN=$(curl -s -X POST "$API/api/auth/login" -H "Content-Type: application/json" -d '{"email":"admin@fcbcakewala.in","password":"FCBCake@2026"}' | python3 -c "import sys,json;print(json.load(sys.stdin)['token'])")
curl -s "$API/api/auth/me" -H "Authorization: Bearer $TOKEN"
curl -s "$API/api/enquiries" -H "Authorization: Bearer $TOKEN"
```
Login returns a token; /me returns the admin user; /enquiries lists enquiries. Without the token these return 401.

Step 3: Feature toggle
```
curl -s -X POST "$API/api/admin/enquiries/<ENQUIRY_ID>/feature" -H "Authorization: Bearer $TOKEN"
curl -s "$API/api/gallery"
```
First call flips is_featured true; the photo then appears in /api/gallery and the site gallery under "Fresh from our kitchen".
