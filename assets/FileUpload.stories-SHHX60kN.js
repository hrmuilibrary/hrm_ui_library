import{j as r}from"./jsx-runtime-uGtigUhx.js";import{r as n}from"./iframe-CCpZ0RzU.js";import{F as u,D as x,a as g}from"./DropzoneFileUpload-B6UIcAcl.js";import{I as y}from"./IconInfo-DaPyXjYs.js";import{F as b}from"./types-DQfykHh9.js";import"./preload-helper-Dp1pzeXC.js";import"./Text-CGJlnosw.js";import"./index-31GdvHSE.js";import"./IconDynamicComponent-DqSFy7yo.js";const G={title:"FileUpload",component:u},w=t=>{const[l,o]=n.useState([]),e=s=>{s&&s.length&&o(s)};return r.jsx("div",{style:{width:400},children:r.jsx(u,{...t,getFiles:e,fileAllowedSize:9e6,uploadedFiles:l,onError:s=>console.log("type",s)})})},i=w.bind({});i.args={label:"Label",buttonText:"Attach file",isFileUploaded:!1,labelAddons:r.jsx(y,{size:"xsmall",type:"information",className:"ml-4"})};async function E(t,l){const e=await(await fetch(t)).blob();return new File([e],l,{type:e.type})}const U=[{name:"file1.jpeg",url:"https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},{name:"file2.jpeg",url:"https://images.unsplash.com/photo-1731505103716-7ee6fa96dee5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}],j=t=>{const[l,o]=n.useState([]);return n.useEffect(()=>{U.forEach(e=>{E(e.url,e.name).then(s=>{o(h=>[...h,s])})})},[]),r.jsx("div",{style:{width:800},children:r.jsx(x,{...t,setFiles:o,selectedFiles:l,maxSize:30*1024*1024,accept:[b.IMAGE],mode:g.attach,multiple:!1})})},a=j.bind({});a.args={};var p,c,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState([]);
  const getFiles = _files => {
    if (_files && _files.length) {
      setFiles(_files);
    }
  };
  return <div style={{
    width: 400
  }}>
      <_FileUpload {...args} getFiles={getFiles} fileAllowedSize={9000000} uploadedFiles={files} onError={type => console.log('type', type)} />
    </div>;
}`,...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,f,F;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    mockFiles.forEach(file => {
      urlToFile(file.url, file.name).then(file => {
        setFiles(prev => [...prev, file]);
      });
    });
  }, []);
  return <div style={{
    width: 800
  }}>
      <_DropzoneFileUpload {...args} setFiles={setFiles} selectedFiles={files} maxSize={30 * 1024 * 1024} accept={[FileTypeEnum.IMAGE]} mode={FileUploadMode.attach} multiple={false}
    // maxFiles={2}
    />
    </div>;
}`,...(F=(f=a.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};const H=["FileUpload","DropzoneFileUpload"];export{a as DropzoneFileUpload,i as FileUpload,H as __namedExportsOrder,G as default};
