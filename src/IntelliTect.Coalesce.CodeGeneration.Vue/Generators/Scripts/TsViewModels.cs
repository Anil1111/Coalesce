﻿using IntelliTect.Coalesce.CodeGeneration.Generation;
using IntelliTect.Coalesce.TypeDefinition;
using IntelliTect.Coalesce.Utilities;
using System.Linq;
using System.Threading.Tasks;

namespace IntelliTect.Coalesce.CodeGeneration.Vue.Generators
{
    public class TsViewModels : StringBuilderFileGenerator<ReflectionRepository>
    {
        public TsViewModels(GeneratorServices services) : base(services)
        {
        }

        public override Task<string> BuildOutputAsync()
        {
            var b = new TypeScriptCodeBuilder();
            b.Line("import * as metadata from './metadata.g'");
            b.Line("import * as models from './models.g'");
            b.Line("import { ViewModel, defineProps } from './coalesce/core/viewmodel'");
            b.Line();

            foreach (var model in Model.Entities)
            {
                string viewModelName = $"{model.ViewModelClassName}ViewModel";
                b.Line($"export interface {viewModelName} extends models.{model.ViewModelClassName} {{}}");
                using (b.Block($"export class {viewModelName} extends ViewModel<models.{model.ViewModelClassName}>"))
                {
                    // This is an alternative to calling defineProps() on each class that causes larger and more cluttered files:
                    //foreach (var prop in model.ClientProperties)
                    //{
                    //    b.Line($"get {prop.JsVariable}() {{ return this.$data.{prop.JsVariable} }}");
                    //    b.Line($"set {prop.JsVariable}(val) {{ this.$data.{prop.JsVariable} = val }}");
                    //}

                    using (b.Block($"constructor(initialData?: models.{model.ViewModelClassName})"))
                    {
                        b.Line($"super(metadata.{model.ViewModelClassName}, initialData)");
                    }
                }
                b.Line($"defineProps({viewModelName}, metadata.{model.ViewModelClassName})");
                b.Line();
            }

            return Task.FromResult(b.ToString());
        }
    }
}
