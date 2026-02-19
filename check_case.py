
import os
import re
import sys

def check_imports(directory):
    errors = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.ts', '.tsx')):
                filepath = os.path.join(root, file)
                with open(filepath, 'r') as f:
                    content = f.read()
                    # Match static imports
                    imports = re.findall(r"from\s+['\"](@/|./|../)([^'\"]+)['\"]", content)
                    for prefix, path in imports:
                        if prefix == '@/':
                            full_path = os.path.join(os.getcwd(), 'src', path)
                        else:
                            full_path = os.path.normpath(os.path.join(root, path))
                        
                        # Check existence with literal casing
                        if not os.path.exists(full_path + '.ts') and \
                           not os.path.exists(full_path + '.tsx') and \
                           not os.path.exists(os.path.join(full_path, 'index.ts')) and \
                           not os.path.exists(os.path.join(full_path, 'index.tsx')) and \
                           not os.path.exists(full_path) : # for folders/other files
                            
                            # Check if it exists with different casing
                            parent = os.path.dirname(full_path)
                            base = os.path.basename(full_path)
                            if os.path.exists(parent):
                                actual_files = os.listdir(parent)
                                matches = [f for f in actual_files if f.lower() == base.lower() or f.lower() == (base + '.ts').lower() or f.lower() == (base + '.tsx').lower()]
                                if matches:
                                    errors.append(f"Case mismatch in {filepath}: imported '{path}' but found '{matches[0]}'")
                                else:
                                    # Might be a library or alias not handled
                                    pass
    return errors

if __name__ == "__main__":
    src_dir = os.path.join(os.getcwd(), 'src')
    import_errors = check_imports(src_dir)
    if import_errors:
        for err in import_errors:
            print(err)
    else:
        print("No case mismatches found in imports.")
