
using System;
using System.Collections.Generic;
using System.Security.Claims;
using Intellitect.ComponentModel.Interfaces;
using Intellitect.ComponentModel.Models;
using Intellitect.ComponentModel.Mapping;
using System.Linq;
using Newtonsoft.Json;
// Model Namespaces
    using Coalesce.Domain;
    using Coalesce.Domain.External;
using static Coalesce.Domain.PersonStats;

namespace Coalesce.Web.Models
{
    public partial class PersonStatsDtoGen : GeneratedDto<PersonStats, PersonStatsDtoGen>
        , IClassDto<PersonStats, PersonStatsDtoGen>
        {
        public PersonStatsDtoGen() { }

             public Int32? PersonStatsId { get; set; }
             public Double? Height { get; set; }
             public Double? Weight { get; set; }
             public PersonLocation PersonLocation { get; set; }

        // Create a new version of this object or use it from the lookup.
        public static PersonStatsDtoGen Create(PersonStats obj, ClaimsPrincipal user = null, string includes = null,
                                   Dictionary<string, object> objects = null) {
            // Return null of the object is null;
            if (obj == null) return null;
                        
            if (objects == null) objects = new Dictionary<string, object>();

            if (user == null) throw new InvalidOperationException("Updating an entity requires the User property to be populated.");

            includes = includes ?? "";

            // Applicable includes for PersonStats
            

            // Applicable excludes for PersonStats
            

            // Applicable roles for PersonStats
            if (user != null)
			{
			}



            // See if the object is already created.
            string key = $"PersonStats{obj.PersonStatsId}";
            if (objects.ContainsKey(key)) 
                return (PersonStatsDtoGen)objects[key];

            var newObject = new PersonStatsDtoGen();
            objects.Add(key, newObject);
            // Fill the properties of the object.
            newObject.PersonStatsId = obj.PersonStatsId;
            newObject.Height = obj.Height;
            newObject.Weight = obj.Weight;
            newObject.PersonLocation = obj.PersonLocation;
            return newObject;
        }

        // Instance constructor because there is no way to implement a static interface in C#.
        public PersonStatsDtoGen CreateInstance(PersonStats obj, ClaimsPrincipal user = null, string includes = null,
                                Dictionary<string, object> objects = null) {
            return Create(obj, user, includes, objects);
        }

        // Updates an object from the database to the state handed in by the DTO.
        public void Update(PersonStats entity, ClaimsPrincipal user = null, string includes = null)
        {
        if (user == null) throw new InvalidOperationException("Updating an entity requires the User property to be populated.");

        includes = includes ?? "";

        if (OnUpdate(entity, user, includes)) return;

        // Applicable includes for PersonStats
        

        // Applicable excludes for PersonStats
        

        // Applicable roles for PersonStats
        if (user != null)
			{
			}

			entity.Height = (Double)Height;
			entity.Weight = (Double)Weight;
        }

        public void SecurityTrim(ClaimsPrincipal user = null, string includes = null)
        {
        if (OnSecurityTrim(user, includes)) return;

        // Applicable includes for PersonStats
        

        // Applicable excludes for PersonStats
        

        // Applicable roles for PersonStats
        if (user != null)
			{
			}

        }
        }
        }