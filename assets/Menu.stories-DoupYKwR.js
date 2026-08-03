import{j as e}from"./jsx-runtime-rmvHLVgd.js";import{r as i}from"./iframe-Dy6q0Da_.js";import{M as C,N as I}from"./NestedMenu-DuW85-35.js";import{B as b}from"./Button-DdyCxxwE.js";import{I as y}from"./IconArrowDownloadFilled-BM__4t5h.js";import{I as g,a as h,b as x}from"./IconBeach-CkdWzfyC.js";import{I as M}from"./IconMore-y1jR2gKW.js";import{I as O}from"./IconCheckmark-DJCaLvF3.js";import{I as n}from"./IconSettings-BzNfH9a9.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-DrDbSXzu.js";import"./index-CvFVU3_3.js";import"./Text-DcVt_zKC.js";import"./helpers-D7YbQzvp.js";import"./index-AboGxAif.js";import"./types-CivKHnvw.js";import"./index-Do8fCJd2.js";import"./useOnOutsideClick-D_ZIWdvO.js";import"./CollapseGroup-COK1-1i_.js";import"./Divider-DjPAtpQ1.js";import"./AnimatePresenceWrapper-Ddf5IpIQ.js";import"./IconChevronDown-Dm5aRz2b.js";import"./IconChevronUp-_e9WMsUR.js";import"./IconChevronRight-Deb82rRy.js";import"./AvatarGroup-BrvzE8HR.js";import"./DropzoneFileUpload-Cit3cVOZ.js";import"./Label-STgLI3mY.js";import"./useFormProps-C00I6UeB.js";import"./ErrorMessage-YqRcf1Al.js";import"./IconDynamicComponent-0_YIpUIW.js";import"./Snackbar-QeuzeW58.js";import"./Alert-BI4KMmH9.js";import"./IconDismissFilled-B1fMJDXY.js";import"./Progress-7U8OcU4x.js";import"./IconAdd-Cjs314yj.js";import"./Checkbox-BsplFLP7.js";import"./Popover-H6cUZQor.js";import"./IconDismiss-DAJvoV8j.js";import"./Link-Cg9gy77M.js";import"./IconInfo-ZZbIsE8D.js";const ve={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconMore
      }} />
        <_Menu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={items} isOpen={open} />
      </div>
    </div>;
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,f,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div style={{
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconSettings
      }} type="tertiary" />
        <_NestedMenu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={NestedItems} isOpen={open} position="bottom-left" />
      </div>
    </div>;
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Ce=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,Ce as __namedExportsOrder,ve as default};
