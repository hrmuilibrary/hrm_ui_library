import{j as e}from"./jsx-runtime-CRV1wsqZ.js";import{r as i}from"./iframe-Dkwnu5r8.js";import{M as C,N as I}from"./NestedMenu-2d1p3am4.js";import{B as b}from"./Button-DcjAQVKK.js";import{I as y}from"./IconArrowDownloadFilled-CQTeIssV.js";import{I as g,a as h,b as x}from"./IconBeach-C3aVwoAZ.js";import{I as M}from"./IconMore-w1d__Rlg.js";import{I as O}from"./IconCheckmark-CwV_g7cI.js";import{I as n}from"./IconSettings-CqS6sYgh.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-B9BpCeCB.js";import"./index-Bhiaplye.js";import"./Text-D6ePIzKZ.js";import"./helpers-DfmQ1hOj.js";import"./index-AboGxAif.js";import"./types-BvNpov2Y.js";import"./index-D07xtBE_.js";import"./Popover-BibChAQz.js";import"./IconDismiss-cPqzSfeh.js";import"./Link-Bg712_3L.js";import"./CollapseGroup-CPqtAp6m.js";import"./Divider-xcmY7NZH.js";import"./AnimatePresenceWrapper-G0JydHwA.js";import"./IconChevronDown-D-a5hNms.js";import"./IconChevronUp-BsDU70iR.js";import"./IconChevronRight-Kx34aMfH.js";import"./AvatarGroup-CL77isrQ.js";import"./DropzoneFileUpload-CEHPWusm.js";import"./Label-BD6PcrV7.js";import"./useFormProps-DtPetGM0.js";import"./ErrorMessage-DkDxS0XJ.js";import"./IconDynamicComponent-UwblBiXv.js";import"./Snackbar-BwpWnfj7.js";import"./Alert-CiD1DKkU.js";import"./IconDismissFilled-B8fo2nUN.js";import"./Progress-CWD1mumc.js";import"./IconAdd-G57nKHbA.js";import"./Checkbox-DPg14uX0.js";import"./IconInfo-D3j3K9nm.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ve=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,ve as __namedExportsOrder,fe as default};
