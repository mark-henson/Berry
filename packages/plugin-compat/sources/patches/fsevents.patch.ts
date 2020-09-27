let patch: string;

export function getPatch() {
  if (typeof patch === `undefined`)
    patch = require(`zlib`).brotliDecompressSync(Buffer.from(`G1gUAIzCtr1RFgYnGRCSR7tW5mtUZcWxZJLJ5+QPhRO1Mqd/fV5blgwXQhXox2A5lpywxnKwrf90308/9ynMOJXeuffc+W37Pm+mfQcqC7+2YOiZBBhQAj2G8x0GIumj/L7qgTEIw3SQQxXWhb+goUN8LGflfgO0yKsaQ31Uu8t918zXxjU4tanYt+q2D8X14LrUTE3hIipW1hRZsyhdxmuHyULfJQC59+X0ZKEzvHRhxSBf47vEwpMAZjXMH4ewe+P4GGGl8cfwL9UqgsDBDYk2OoNEfYfJ6fxOqM6/PxCjjMiGp6cNdxgYW6VnlUHxeQK/LATUTuM0pxsuH4aeOFU1SYzj5MGBCCDmOTGp8PMWPl8+UFLy8AMqLIw7SJKEKGgkjkG1bRyJBAD7E6Es+YGoCJ1cZspyXAAjA8kz92LyzXOddSRHh3E6mvqRhF3uMIGA1ANhHeuVMoYCXB2EnwykgJxF8eQH+5BunrEElFQVHUBKQOC+Xaqy1auK7danJKOmkCzKCsYKC6JIgWgpBjArKgVab2L+O++j8exxoiwKK4s2Jcv3xzqHndoT+4UE1CRGrBdoz2Mqd266zNoBrSFSl/1DczLUmerck+EpfhNzezn9bCoEZMWLFq7zSv1Ym1yr4BPpAGpNa2/6nwQ1zgxKSynV+cn4v8/4KgVoWz63oxQyPVe+oargcCmplRg4e/gpRJ9yO0oDRI/9gc3u31zwvImzIiSnh4YJprWbHE6MJY1QXCUVZOkNMZj4CKwKyaiMKMeJ2eQQEvnVeKCcdpCkBj3CUMXPHvkRU/GFRwpAca4qKIt4W5C6lp3VTyTGsEXj+FWJDyKaI6aNi6+OOtnKI0AsIA95Tb2tin1zZwh1VcsgSyxttc1uBesN33KJAXqKxPkqZGiw5EnxXFMvtkpU1fNQDtqwlIh8Z3XEImLx1If92re5eSwY/vfereCgWBEWRQAhLjL5PEETZTnNXQ39fBpZ5hdFgJX/9K/saCzqQRVnKyetoQFZrToRqZ3qNyupDpdDPFy5vMm/5NLN7fSHq2vNPZtl3IoaSJtNnXXDYGPXQankoilPkuVgZxbwATtTtRhsEf5YnJHMWOZ9zs5lp5EFBSMoXN6S1ExxJV69al8IIgBD8lCN5zYEoR+wyUL4izd82kyFiIiXzReAiFSWOvXCMm2A5SmbcZkQUGaCHYSKaYU84gmgA6JIh7MtsfRorwFW5f2Vq7iknEmHWlebKXJnx9qNv9CxaRDdRKPack7pYGSlAcsb56znJqZavA+Vk9MqOUkJgrAl1ZMx0Dd7Spsi2po41eiOyrQsKJez5XK0BehadCCNkKEMLUK0GuxuiAr5a+rVaAayYqdZ4g1BlyQ0BhzG77C0vWj/UV2rtiA1CvymiPJledJBiNXRjVetfV8bu7/ry/9RG7GCK8rfd/zvuUxL`, `base64`)).toString();

  return patch;
}
