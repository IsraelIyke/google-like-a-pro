//condition2: all of the search specifiers are false except for "search by site"
else if (
site.length > 0 &&
!exact &&
word.length === 0 &&
omit.length === 0 &&
file.length === 0 &&
year.length === 0 &&
!title &&
synonym.length === 0 &&
!related &&
location.length === 0 &&
range.length === 0 &&
omitSite.length === 0 &&
before.length === 0 &&
after.length === 0
) {
return `site:${site} ${prev}`;
}
//condition3: all of the search specifiers are false except for "search exact phrase"
else if (
site.length === 0 &&
exact &&
word.length === 0 &&
omit.length === 0 &&
file.length === 0 &&
year.length === 0 &&
!title &&
synonym.length === 0 &&
!related &&
location.length === 0 &&
range.length === 0 &&
omitSite.length === 0 &&
before.length === 0 &&
after.length === 0
) {
return `"${prev}"`;
}
//condition4: all of the search specifiers are false except for "include exact word"
else if (
site.length === 0 &&
!exact &&
word.length > 0 &&
omit.length === 0 &&
file.length === 0 &&
year.length === 0 &&
!title &&
synonym.length === 0 &&
!related &&
location.length === 0 &&
range.length === 0 &&
omitSite.length === 0 &&
before.length === 0 &&
after.length === 0
) {
return `${prev} "${word}"`;
}
//condition5: all of the search specifiers are false except for "omit a word"
else if (
site.length === 0 &&
!exact &&
word.length === 0 &&
omit.length > 0 &&
file.length === 0 &&
year.length === 0 &&
!title &&
synonym.length === 0 &&
!related &&
location.length === 0 &&
range.length === 0 &&
omitSite.length === 0 &&
before.length === 0 &&
after.length === 0
) {
return `${prev} -${omit}`;
}
//condition6: all of the search specifiers are false except for "filetype"
else if (
site.length === 0 &&
!exact &&
word.length === 0 &&
omit.length === 0 &&
file.length > 0 &&
year.length === 0 &&
!title &&
synonym.length === 0 &&
!related &&
location.length === 0 &&
range.length === 0 &&
omitSite.length === 0 &&
before.length === 0 &&
after.length === 0
) {
return `filetype:${file} ${prev}`;
}
//condition7: all of the search specifiers are false except for "year"
else if (
site.length === 0 &&
!exact &&
word.length === 0 &&
omit.length === 0 &&
file.length === 0 &&
year.length > 0 &&
!title &&
synonym.length === 0 &&
!related &&
location.length === 0 &&
range.length === 0 &&
omitSite.length === 0 &&
before.length === 0 &&
after.length === 0
) {
return `inurl:${year} ${prev}`;
}
//condition8: all of the search specifiers are false except for "title"
else if (
site.length === 0 &&
!exact &&
word.length === 0 &&
omit.length === 0 &&
file.length === 0 &&
year.length === 0 &&
title &&
synonym.length === 0 &&
!related &&
location.length === 0 &&
range.length === 0 &&
omitSite.length === 0 &&
before.length === 0 &&
after.length === 0
) {
return `allintitle:"${prev}"`;
}
//condition9: all of the search specifiers are false except for "synonym"
else if (
site.length === 0 &&
!exact &&
word.length === 0 &&
omit.length === 0 &&
file.length === 0 &&
year.length === 0 &&
!title &&
synonym.length > 0 &&
!related &&
location.length === 0 &&
range.length === 0 &&
omitSite.length === 0 &&
before.length === 0 &&
after.length === 0
) {
return `${prev} ~${synonym}`;
}
//condition10: all of the search specifiers are false except for "related sites"
else if (
site.length === 0 &&
!exact &&
word.length === 0 &&
omit.length === 0 &&
file.length === 0 &&
year.length === 0 &&
!title &&
synonym.length === 0 &&
related &&
location.length === 0 &&
range.length === 0 &&
omitSite.length === 0 &&
before.length === 0 &&
after.length === 0
) {
return `related:${prev}`;
}
//condition11: all of the search specifiers are false except for "location"
else if (
site.length === 0 &&
!exact &&
word.length === 0 &&
omit.length === 0 &&
file.length === 0 &&
year.length === 0 &&
!title &&
synonym.length === 0 &&
!related &&
location.length > 0 &&
range.length === 0 &&
omitSite.length === 0 &&
before.length === 0 &&
after.length === 0
) {
return `location:${location} ${prev}`;
}
//condition12: all of the search specifiers are false except for "range"
else if (
site.length === 0 &&
!exact &&
word.length === 0 &&
omit.length === 0 &&
file.length === 0 &&
year.length === 0 &&
!title &&
synonym.length === 0 &&
!related &&
location.length === 0 &&
range.length > 0 &&
omitSite.length === 0 &&
before.length === 0 &&
after.length === 0
) {
return `${prev} ${range}`;
}
//condition13: all of the search specifiers are false except for "range"
else if (
site.length === 0 &&
!exact &&
word.length === 0 &&
omit.length === 0 &&
file.length === 0 &&
year.length === 0 &&
!title &&
synonym.length === 0 &&
!related &&
location.length === 0 &&
range.length === 0 &&
omitSite.length > 0 &&
before.length === 0 &&
after.length === 0
) {
return `-site:${omitSite} ${prev}`;
}
//condition13: all of the search specifiers are false except for "range"
else if (
site.length === 0 &&
!exact &&
word.length === 0 &&
omit.length === 0 &&
file.length === 0 &&
year.length === 0 &&
!title &&
synonym.length === 0 &&
!related &&
location.length === 0 &&
range.length === 0 &&
omitSite.length === 0 &&
before.length > 0 &&
after.length === 0
) {
return `BEFORE:${before} ${prev}`;
}
//condition13: all of the search specifiers are false except for "range"
else if (
site.length === 0 &&
!exact &&
word.length === 0 &&
omit.length === 0 &&
file.length === 0 &&
year.length === 0 &&
!title &&
synonym.length === 0 &&
!related &&
location.length === 0 &&
range.length === 0 &&
omitSite.length === 0 &&
before.length === 0 &&
after.length > 0
) {
return `AFTER:${after} ${prev}`;
}

filetype:${file} inurl:${year} allintitle:"${prev}" ~${synonym} "${word}" -${omit} ${range} location:${location} -site:${omitSite} related:${prev}
