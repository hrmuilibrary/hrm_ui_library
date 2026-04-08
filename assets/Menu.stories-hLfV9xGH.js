import{j as e}from"./jsx-runtime-BcRMXQyU.js";import{r as i}from"./iframe-BmPqtltp.js";import{M as C,N as I}from"./NestedMenu-zK-JzIB5.js";import{B as b}from"./Button-DZDCfiqQ.js";import{I as y}from"./IconArrowDownloadFilled-DF6_wm9j.js";import{I as g,a as h,b as x}from"./IconBeach-_astgU4j.js";import{I as M}from"./IconMore-BMMl8rXb.js";import{I as O}from"./IconCheckmark-Btt5PURx.js";import{I as n}from"./IconSettings-DeRLADWq.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-DCyFeIsx.js";import"./index-B4zDiMuM.js";import"./Text-CEYn29Gb.js";import"./helpers-BSfmB4bo.js";import"./index-AboGxAif.js";import"./types-DKrvdElD.js";import"./Popover-BZqhUUzn.js";import"./IconDismiss-BHf4nfNZ.js";import"./Link-CGW62roK.js";import"./index-B02YPdu9.js";import"./CollapseGroup-CFJ6qB-I.js";import"./Divider-CDZNQ3nR.js";import"./AnimatePresenceWrapper-HOZBfj0s.js";import"./IconChevronDown-spapFAV0.js";import"./IconChevronUp-BStg_aVG.js";import"./IconChevronRight-KuPIgtnh.js";import"./AvatarGroup-DaL6H76R.js";import"./DropzoneFileUpload-73fkr5Je.js";import"./Label-Dz0ZVh8p.js";import"./useFormProps-CuxG-cwi.js";import"./ErrorMessage-CVfeRgq-.js";import"./IconDynamicComponent-CRdYp_EF.js";import"./Snackbar-DBsKVVZA.js";import"./Alert-DxbPVG7I.js";import"./IconDismissFilled-0Xm-0IC1.js";import"./Progress-BtDxFdH2.js";import"./IconAdd-DR-IH63g.js";import"./Checkbox-CWt2nQTf.js";import"./IconInfo-xonxLAw7.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
