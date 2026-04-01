import{j as e}from"./jsx-runtime-DhhSRmUj.js";import{r as i}from"./iframe-XWSxHUYp.js";import{M as C,N as I}from"./NestedMenu-D1lcvWmL.js";import{B as b}from"./Button-BhSoGOsT.js";import{I as y}from"./IconArrowDownloadFilled-4XJgZsA6.js";import{I as g,a as h,b as x}from"./IconBeach-BnaVJ25Q.js";import{I as M}from"./IconMore-Dn3i73UM.js";import{I as O}from"./IconCheckmark-C73epyu7.js";import{I as n}from"./IconSettings-CrRtuN2S.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-DXc3Ti7K.js";import"./index-CPmHIjO7.js";import"./Text-B0Ompgmd.js";import"./helpers-DywMQWg2.js";import"./index-AboGxAif.js";import"./types-DDH93KLr.js";import"./Popover-BBpeuzf3.js";import"./IconDismiss-DdXA4tYu.js";import"./Link-CiAD8QoA.js";import"./index-DVxRUtCn.js";import"./CollapseGroup-BC7gA-_N.js";import"./Divider-anqlekOx.js";import"./AnimatePresenceWrapper-CZp9evis.js";import"./IconChevronDown-CXcT1Rfn.js";import"./IconChevronUp-Co-48cyh.js";import"./IconChevronRight-C3yFcdsG.js";import"./AvatarGroup-jP1dEtFv.js";import"./DropzoneFileUpload-DAREOwY-.js";import"./Label-CpoAPXCB.js";import"./useFormProps-Dt2i-gjP.js";import"./ErrorMessage-DLc7yXeL.js";import"./IconDynamicComponent-BkazmEr3.js";import"./Snackbar-L4YQeee4.js";import"./Alert-DCpYfA-P.js";import"./IconDismissFilled-DZGKPyvP.js";import"./Progress-BH4yO1mP.js";import"./IconAdd-CqerbPmL.js";import"./Checkbox-CndSihGO.js";import"./IconInfo-BB8HdVc0.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
