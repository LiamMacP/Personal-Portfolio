const { GetGithubRepos, GetGithubProfile } = require('../../../middleware/profile');
const router = require('express').Router();

router.get('/info', GetGithubProfile);

router.get('/repos', GetGithubRepos);

module.exports = router;
